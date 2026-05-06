const API_URL = "https://api.freeapi.app/api/v1/public/randomproducts";

const productGrid = document.querySelector("#productGrid");
const statusPanel = document.querySelector("#statusPanel");
const summary = document.querySelector("#summary");
const refreshButton = document.querySelector("#refreshButton");
const itemCount = document.querySelector("#itemCount");
const categoryCount = document.querySelector("#categoryCount");
const averageRating = document.querySelector("#averageRating");

const formatPrice = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function getProducts(payload) {
  if (Array.isArray(payload?.data?.data)) {
    return payload.data.data;
  }

  if (Array.isArray(payload?.data)) {
    return payload.data;
  }

  return [];
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function productTemplate(product) {
  const title = escapeHtml(product.title || "Untitled product");
  const brand = escapeHtml(product.brand || "Unknown brand");
  const category = escapeHtml(product.category || "General");
  const description = escapeHtml(
    product.description || "No description available for this product."
  );
  const image = escapeHtml(product.thumbnail || product.images?.[0] || "");
  const price = Number(product.price || 0);
  const rating = Number(product.rating || 0).toFixed(1);
  const stock = Number(product.stock || 0);
  const discount = Number(product.discountPercentage || 0).toFixed(0);

  return `
    <article class="product-card">
      <div class="product-media">
        <img src="${image}" alt="${title}" loading="lazy" />
      </div>
      <div class="product-body">
        <div class="product-meta">
          <span class="pill">${brand}</span>
          <span class="pill">${category}</span>
        </div>
        <h2 class="product-title">${title}</h2>
        <p class="product-description">${description}</p>
        <div class="stock">${stock} in stock · ${discount}% off</div>
        <div class="product-footer">
          <span class="price">${formatPrice.format(price)}</span>
          <span class="rating" aria-label="Rating ${rating} out of 5">★ ${rating}</span>
        </div>
      </div>
    </article>
  `;
}

function updateSummary(products) {
  const categories = new Set(products.map((product) => product.category).filter(Boolean));
  const ratingTotal = products.reduce(
    (total, product) => total + Number(product.rating || 0),
    0
  );

  itemCount.textContent = products.length;
  categoryCount.textContent = categories.size;
  averageRating.textContent = products.length
    ? (ratingTotal / products.length).toFixed(1)
    : "0.0";
  summary.hidden = false;
}

function showStatus(message, isError = false) {
  statusPanel.textContent = message;
  statusPanel.hidden = false;
  statusPanel.classList.toggle("error", isError);
}

async function loadProducts() {
  refreshButton.disabled = true;
  productGrid.innerHTML = "";
  summary.hidden = true;
  showStatus("Loading products...");

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const payload = await response.json();
    const products = getProducts(payload);

    if (!products.length) {
      showStatus("No products were returned by the API.");
      return;
    }

    updateSummary(products);
    statusPanel.hidden = true;
    productGrid.innerHTML = products.map(productTemplate).join("");
  } catch (error) {
    showStatus(
      "Unable to load products right now. Please try again in a moment.",
      true
    );
    console.error(error);
  } finally {
    refreshButton.disabled = false;
  }
}

refreshButton.addEventListener("click", loadProducts);
loadProducts();
