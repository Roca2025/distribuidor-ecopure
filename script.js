// Array de productos utilizando la información del documento
// Se incluye la imagen para el purificador portátil con el nombre "PSA1P-Portatil.jpg"

const products = [
  {
    id: 1,
    name: "PSA Senior 4",
    price: 640000,
    description:
      "Agua purificada y segura para beber, cocinar y lavar alimentos. Diseño compacto y estético, con opciones de colores modernos (Bianco, Nero y Grigio). Mayor poder de purificación, eliminando más del 90% de cloro, 60% de trihalometanos y metales pesados. Nuevo filtro Fipor® n°.3, con mayor superficie filtrante. Instalación fácil, purga automática y regulador de caudal. Kit posventa incluido, estuche compostable, cartón reciclable, certificación ANMAT y resistencia a altas presiones (hasta 6 kg/cm²).",
    image: "img/IMG-20250113-WA0030.jpg"
  },
  {
    id: 2,
    name: "PSA Ducha II",
    price: 209000,
    description:
      "Elimina el cloro del agua, suaviza el agua, reduce metales pesados y sólidos en suspensión, disminuye incrustaciones y depósitos. Brinda agua más limpia y saludable y cuenta con un sistema anticalcáreo para facilitar la eliminación de sarro.",
    image: "img/IMG-20250312-WA0004.jpg"
  },
  {
    id: 3,
    name: "SodaBurby",
    price: 307000,
    description:
      "Permite obtener agua burbujeante fresca y pura en segundos. Ideal para personalizar bebidas, reduce la compra de bebidas embotelladas, es ecológico, portátil, de diseño moderno y elegante, y no requiere electricidad ni conexión a la red de agua.",
    image: "img/IMG-20250313-WA0010.jpg"
  },
  {
    id: 4,
    name: "PSA MINI (Nero)",
    price: 289000,
    description:
      "Proporciona agua purificada de calidad directamente desde la canilla, permitiendo ahorro en comparación con agua embotellada. Elimina cloro e impurezas, cuida la salud de la familia, es compacto, cuenta con pico cómodo, purga automática y regulador de caudal, kit posventa y materiales compostables.",
    image: "img/IMG-20250204-WA0022.jpg"
  },
  {
    id: 5,
    name: "PSA Senior (Bianco)",
    price: 528000,
    description:
      "Entrega agua purificada directamente desde la canilla a bajo costo por litro. Incluye casquete giratorio 360°, nuevos medios activos (zeolitas), instalación sencilla, indicador de fin de vida útil, sistema de purga automática, válvula by-pass mejorada y kit posventa.",
    image: "img/IMG-20250312-WA0003.jpg"
  },
  {
    id: 6,
    name: "PSA 1P Portátil",
    price: 86000,
    description:
      "Proporciona agua purificada de manera práctica y segura en cualquier lugar. Ideal para viajes o camping, es compacto, funciona por gravedad y permite obtener agua segura y de buen sabor en segundos.",
    image: "img/PSA1P-Portatil.jpg"  // <-- Aquí está la nueva imagen
  },
  {
    id: 7,
    name: "PSA eco-D",
    price: 1918000,
    description:
      "Ecológico: Modo eco que apaga el equipo en ausencia de luz, reduciendo consumo y evitando el descarte de hasta 80,000 botellas. Práctico y ergonómico: Panel táctil, bandeja de apoyo, mayor caudal y portavasos. Seguro: Protección para niños, sensor contra pérdidas e inundaciones y protección contra altas presiones. Disponible en versión de pie o para colocar sobre mesada.",
    image: "img/IMG-20250314-WA0014.jpg"
  },
  {
    id: 8,
    name: "Iontrix 2",
    price: 866000,
    description:
      "Modo eco que apaga el equipo por falta de luz, bajo consumo energético y evita el uso de hasta 80,000 botellas plásticas. Práctico: Panel táctil, bandeja de apoyo, mayor distancia a las canillas, mayor caudal y portavasos. Seguro: Protección para niños, sensor contra pérdidas e inundaciones y protección contra altas presiones.",
    image: "img/IMG-20250314-WA0005.jpg"
  },
  {
    id: 9,
    name: "PSA Vero",
    price: 371000,
    description:
      "Ofrece agua purificada a bajo costo, eliminando la necesidad de comprar agua embotellada. Elimina cloro, THM y metales pesados gracias a carbón activado y KDF®. Fácil instalación, agua disponible al instante, sistema de purga automática, kit posventa y regulador automático de caudal.",
    image: "img/IMG-20250314-WA0010.jpg"
  },
  {
    id: 10,
    name: "Purificador de Aire PSA",
    price: 1120000,
    description:
      "Mejora la calidad del aire reduciendo polvo, pelos, ácaros, bacterias y gérmenes. Elimina olores desagradables, cuenta con sistema de filtración avanzado (electrostática, carbón activado, G4 y HEPA) y genera iones negativos para equilibrar el ambiente.",
    image: "img/IMG-20250314-WA0011.jpg"
  },
  {
    id: 11,
    name: "PSA Quantum",
    price: 892000,
    description:
      "Elimina cloro, contaminantes orgánicos y metales pesados, reduciendo la dureza del agua. Mejora sabor, olor y apariencia, impide la reproducción bacteriana, tiene un rendimiento de hasta 20.000 litros, diseño renovado con pico largo, instalación bajo mesada, kit posventa y cartucho de 12 meses de durabilidad, autorizado por ANMAT.",
    image: "img/IMG-20250314-WA0009.jpg"
  },
  {
    id: 12,
    name: "PSA Domus",
    price: 2200000,
    description:
      "Protege contra la formación de sarro, prolonga la vida de electrodomésticos, previene manchas en vajilla y cuida la piel y cabello con agua blanda. Ofrece bajo mantenimiento, tanque de resina recambiable cada 4 años, mantenimiento automático y cumple con normas CE, RoHS y NSF/ANSI 44.",
    image: "img/IMG-20250314-WA0012.jpg"
  },
  {
    id: 13,
    name: "PSA Senior 3 (Plata)",
    price: 569000,
    description:
      "Proporciona agua purificada directamente desde la canilla, siendo la opción más económica. Reduce más del 90% de cloro, 60% de THM y metales (hierro, plomo, cromo, manganeso y aluminio) mediante zeolitas. Diseño moderno, sistema de purga automática, regulador de caudal, base integrada, tapa de prefiltro, casquete giratorio 360° e indicador de fin de vida útil, con instalación sencilla.",
    image: "img/IMG-20250314-WA0013.jpg"
  }
];

let cart = [];

// Función para renderizar los productos en la página
function renderProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  products.forEach(product => {
    const priceText = product.price > 0 ? `$${product.price.toLocaleString()}` : "Precio a consultar";
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>Precio: ${priceText}</p>
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
  const priceText = product.price > 0 ? `$${product.price.toLocaleString()}` : "Precio a consultar";
  
  modalDetails.innerHTML = `
    <img src="${product.image}" alt="${product.name}" style="width:100%; height:200px; object-fit:cover; margin-bottom:1rem;">
    <h3>${product.name}</h3>
    <p>Precio: ${priceText}</p>
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
    const priceText = item.price > 0 ? `$${item.price.toLocaleString()}` : "Precio a consultar";
    const itemDiv = document.createElement("div");
    itemDiv.textContent = `${item.name} - ${priceText}`;
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