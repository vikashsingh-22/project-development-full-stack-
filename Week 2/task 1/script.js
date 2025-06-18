const form = document.getElementById('searchForm');
const input = document.getElementById('searchInput');
const productList = document.getElementById('productList');
const sortSelect = document.getElementById('sortSelect');

let currentProducts = [];

// Fetch products
async function fetchProducts(query = '') {
  const url = query
    ? `https://dummyjson.com/products/search?q=${query}`
    : 'https://dummyjson.com/products';

  const res = await fetch(url);
  const data = await res.json();
  currentProducts = data.products;
  displayProducts(currentProducts);
}

// Display products
function displayProducts(products) {
  productList.innerHTML = '';

  if (products.length === 0) {
    productList.innerHTML = '<p>No products found.</p>';
    return;
  }

  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}" />
      <h3>${product.title}</h3>
      <p>Price: $${product.price}</p>
      <p>Rating: ${product.rating}</p>
    `;

    productList.appendChild(card);
  });
}

// Handle sorting
sortSelect.addEventListener('change', (e) => {
  const criteria = e.target.value;

  if (criteria === 'price-asc') {
    currentProducts.sort((a, b) => a.price - b.price);
  } else if (criteria === 'price-desc') {
    currentProducts.sort((a, b) => b.price - a.price);
  } else if (criteria === 'rating-asc') {
    currentProducts.sort((a, b) => a.rating - b.rating);
  } else if (criteria === 'rating-desc') {
    currentProducts.sort((a, b) => b.rating - a.rating);
  }

  displayProducts(currentProducts);
});

// Handle search
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const query = input.value.trim();

  if (!query) {
    alert('Search field cannot be empty!');
    return;
  }

  fetchProducts(query);
});

// Initial load
fetchProducts();
