// SDK de Mercado Pago
const mp = new MercadoPago("TU_PUBLIC_KEY", { locale: "es-AR" });

// Array de productos
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

// Carrito de compras
let cart = [];

// Función para renderizar los productos
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

// Función para mostrar detalles del producto en el modal
function viewProduct(id) {
  const product = products.find(p => p.id === id);
  const modal = document.getElementById("modal");
  const modalDetails = document.getElementById("modal-details");
  modalDetails.innerHTML = `
    <img src="${product.image}" alt="${product.name}" style="width:100%; height:200px; object-fit:cover; margin-bottom:1rem;">
    <h3>${product.name}</h3>
    <p>Precio: $${product.price.toLocaleString()}</p>
    <p>${product.description}</p>
  `;
  modal.style.display = "flex";
}

// Función para añadir un producto al carrito
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  renderCart();
}

// Función para renderizar el carrito
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

// Cerrar modal al hacer clic en la "X"
document.getElementById("close-modal").onclick = function() {
  document.getElementById("modal").style.display = "none";
};

// Cerrar modal al hacer clic fuera del modal
window.onclick = function(event) {
  if (event.target === document.getElementById("modal")) {
    document.getElementById("modal").style.display = "none";
  }
};

// Integración con Mercado Pago
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
  };

  try {
    const response = await fetch("https://tu-servidor.repl.co/crear-preferencia", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(preference)
    });

    const data = await response.json();

    if (data.init_point) {
      window.location.href = data.init_point; // Redirige a Mercado Pago
    } else {
      alert("Error al generar la preferencia de pago.");
    }
  } catch (error) {
    console.error("Error al crear la preferencia:", error);
    alert("Hubo un problema con el pago. Inténtalo de nuevo.");
  }
});

// Inicializar la página
document.addEventListener("DOMContentLoaded", function() {
  renderProducts();
  renderCart();
});