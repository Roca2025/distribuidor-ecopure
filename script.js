// ==========================
//   SDK de Mercado Pago
// ==========================
const mp = new MercadoPago("TU_PUBLIC_KEY", { locale: "es-AR" });

// ==========================
//   Array de productos
// ==========================
const products = [
  {
    id: 1,
    name: "PSA Senior 4",
    price: 640000,
    description:
      "Agua purificada y segura para beber, cocinar y lavar alimentos. Diseño compacto, mayor poder de purificación y nuevo filtro Fipor® n°.3.",
    image: "img/IMG-20250113-WA0030.jpg"
  },
  {
    id: 2,
    name: "PSA Ducha II",
    price: 209000,
    description:
      "Elimina el cloro, suaviza el agua y protege la piel y el cabello. Disminuye incrustaciones y facilita la eliminación de sarro.",
    image: "img/IMG-20250312-WA0004.jpg"
  },
  {
    id: 3,
    name: "SodaBurby",
    price: 307000,
    description:
      "Permite obtener agua burbujeante fresca en segundos. Ideal para personalizar bebidas, ecológico y portátil.",
    image: "img/IMG-20250313-WA0010.jpg"
  },
  {
    id: 4,
    name: "PSA MINI (Nero)",
    price: 289000,
    description:
      "Purificador compacto para uso doméstico, fácil de instalar, elimina cloro e impurezas y es sustentable.",
    image: "img/IMG-20250204-WA0022.jpg"
  },
  {
    id: 5,
    name: "PSA Senior (Bianco)",
    price: 528000,
    description:
      "Agua purificada desde la canilla con bajo costo por litro. Casquete giratorio 360° y eficiencia comprobada.",
    image: "img/IMG-20250312-WA0003.jpg"
  },
  {
    id: 6,
    name: "PSA 1P Portátil",
    price: 86000,
    description:
      "Purificador portátil ideal para viajes y camping, funciona por gravedad para obtener agua segura rápidamente.",
    image: "img/Screenshot_20250314_152039_Facebook.jpg"
  }
];

// ==========================
//   Carrito de compras
// ==========================
let cart = [];

// ==========================
//   Renderizar Productos
// ==========================
function renderProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Precio: $${product.price.toLocaleString()}</p>
      <button class="btn" onclick="viewProduct(${product.id})">Ver Detalle</button>
      <button class="btn" onclick="addToCart(${product.id})">Añadir al Carrito</button>
    `;
    productList.appendChild(card);
  });
}

// ==========================
//   Ver Detalle de Producto
// ==========================
function viewProduct(id) {
  const product = products.find(p => p.id === id);
  const modal = document.getElementById("modal");
  const modalDetails = document.getElementById("modal-details");

  if (!product) {
    console.error("Producto no encontrado:", id);
    return;
  }

  modalDetails.innerHTML = `
    <img src="${product.image}" alt="${product.name}" style="width:100%; height:200px; object-fit:cover; margin-bottom:1rem;">
    <h3>${product.name}</h3>
    <p>Precio: $${product.price.toLocaleString()}</p>
    <p>${product.description}</p>
  `;
  modal.style.display = "flex";
}

// ==========================
//   Añadir al Carrito
// ==========================
function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) {
    console.error("Producto no encontrado para el carrito:", id);
    return;
  }
  cart.push(product);
  renderCart();
}

// ==========================
//   Renderizar Carrito
// ==========================
function renderCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>El carrito está vacío.</p>";
    return;
  }

  cart.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.textContent = `${item.name} - $${item.price.toLocaleString()}`;
    cartItems.appendChild(itemDiv);
  });
}

// ==========================
//   Cerrar Modal
// ==========================
document.getElementById("close-modal").onclick = function() {
  document.getElementById("modal").style.display = "none";
};

window.onclick = function(event) {
  if (event.target === document.getElementById("modal")) {
    document.getElementById("modal").style.display = "none";
  }
};

// ==========================
//   Pago con Mercado Pago
// ==========================
document.getElementById("checkout").addEventListener("click", async function() {
  if (cart.length === 0) {
    alert("El carrito está vacío. Agrega productos antes de comprar.");
    return;
  }

  // Crear la preferencia de pago
  const preference = {
    items: cart.map(item => ({
      title: item.name,
      unit_price: item.price,
      quantity: 1,
      currency_id: "ARS"
    }))
    // Puedes agregar más configuraciones, como payer, shipment, etc.
  };

  try {
    // Llamada al endpoint de tu servidor en Replit
    // Asegúrate de que esta URL sea la correcta
    const response = await fetch("https://workspace-effe3ad5-4518-49b3-a07a-c534936f783c.rodrigobiana44.repl.dev/crear-preferencia", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(preference)
    });

    const data = await response.json();

    // Revisamos si hay algún error reportado por el servidor
    if (data.error) {
      console.error("Error en el servidor:", data.error);
      alert("Hubo un problema en el servidor: " + data.error);
      return;
    }

    // Verificamos la respuesta con la URL de pago
    if (data.init_point) {
      // Redirige al usuario a la URL de Mercado Pago
      window.location.href = data.init_point;
    } else {
      console.error("No se encontró 'init_point' en la respuesta:", data);
      alert("Error al generar la preferencia de pago. Revisa la consola para más detalles.");
    }
  } catch (error) {
    console.error("Error al crear la preferencia:", error);
    alert("Hubo un problema con el pago. Inténtalo de nuevo.");
  }
});

// ==========================
//   Inicializar la página
// ==========================
document.addEventListener("DOMContentLoaded", function() {
  renderProducts();
  renderCart();
});