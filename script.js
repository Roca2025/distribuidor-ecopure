// Array de productos con las rutas actualizadas a la carpeta "img"
const products = [
  {
    id: 1,
    name: "PSA Senior 4",
    price: 640000,
    description:
      "Agua purificada y segura para beber, cocinar y lavar alimentos. Diseño compacto, mayor poder de purificación y nuevo filtro Fipor® n°.3. Además, incluye kit posventa y certificación ANMAT.",
    image: "img/IMG-20250113-WA0030.jpg"
  },
  {
    id: 2,
    name: "PSA MINI (Nero)",
    price: 289000,
    description:
      "Purificador compacto para uso doméstico, fácil de instalar, elimina cloro e impurezas y es sustentable.",
    image: "img/IMG-20250204-WA0022.jpg"
  },
  {
    id: 3,
    name: "PSA Senior (Bianco)",
    price: 528000,
    description:
      "Agua purificada desde la canilla con bajo costo por litro. Casquete giratorio 360° y eficiencia comprobada.",
    image: "img/IMG-20250312-WA0003.jpg"
  },
  {
    id: 4,
    name: "PSA Ducha II",
    price: 209000,
    description:
      "Elimina el cloro, suaviza el agua y protege la piel y el cabello. Disminuye incrustaciones y facilita la eliminación de sarro.",
    image: "img/IMG-20250312-WA0004.jpg"
  },
  {
    id: 5,
    name: "SodaBurby",
    price: 307000,
    description:
      "Permite obtener agua burbujeante fresca en segundos. Ideal para personalizar bebidas, ecológico y portátil.",
    image: "img/IMG-20250313-WA0010.jpg"
  },
  {
    id: 6,
    name: "Iontrix",
    price: 0, // Actualiza el precio y descripción según corresponda
    description: "Descripción de Iontrix.",
    image: "img/IMG-20250314-WA0005.jpg"
  },
  {
    id: 7,
    name: "Quantum",
    price: 0,
    description: "Descripción de Quantum.",
    image: "img/IMG-20250314-WA0009.jpg"
  },
  {
    id: 8,
    name: "Vero",
    price: 0,
    description: "Descripción de Vero.",
    image: "img/IMG-20250314-WA0010.jpg"
  },
  {
    id: 9,
    name: "Purificador de aire",
    price: 0,
    description: "Descripción del purificador de aire.",
    image: "img/IMG-20250314-WA0011.jpg"
  },
  {
    id: 10,
    name: "Domus",
    price: 0,
    description: "Descripción de Domus.",
    image: "img/IMG-20250314-WA0012.jpg"
  },
  {
    id: 11,
    name: "Senior 3 plata",
    price: 0,
    description: "Descripción de Senior 3 plata.",
    image: "img/IMG-20250314-WA0013.jpg"
  },
  {
    id: 12,
    name: "ECO-D",
    price: 0,
    description: "Descripción de ECO-D.",
    image: "img/IMG-20250314-WA0014.jpg"
  }
];

let cart = [];

// Función para renderizar los productos en la página
function renderProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>Precio: $${product.price.toLocaleString()}</p>
      <button class="btn" onclick="viewProduct(${product.id})">Ver Detalle</button>
      <button class="btn" onclick="addToCart(${product.id})">Añadir al Carrito</button>
    `;
    productList.appendChild(card);
  });
}

// Función para mostrar los detalles de un producto en el modal
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

// Función para añadir productos al carrito
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  renderCart();
}

// Función para renderizar el carrito de compras
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

// Cerrar el modal cuando se haga clic en la "X"
document.getElementById("close-modal").onclick = function() {
  document.getElementById("modal").style.display = "none";
};

// Cerrar el modal al hacer clic fuera del contenido del modal
window.onclick = function(event) {
  if (event.target === document.getElementById("modal")) {
    document.getElementById("modal").style.display = "none";
  }
};

// Inicializar la página
document.addEventListener("DOMContentLoaded", function() {
  renderProducts();
  renderCart();
});