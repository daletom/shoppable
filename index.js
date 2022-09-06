import { IxVideo } from 'https://static.imgix.net/ix-video/@latest-v1/umd/ix-video.js'
import starterProducts from './products.js'

console.log('SHOPPABLE VIDEO!')

const productsList = document.getElementById('productsList');
renderProducts(starterProducts);

const productsTextarea = document.getElementById('products');
productsTextarea.textContent = JSON.stringify(starterProducts, undefined, 4);

const productsContainer = document.getElementById('productsContainer');
const productsDrawerButton = document.getElementById('productsDrawer');
productsDrawerButton.addEventListener('click', () => {
  productsContainer.classList.toggle('hidden');
})

const updateProductsButton = document.getElementById('updateProducts');
updateProductsButton.addEventListener('click', () => {
  const newProducts = JSON.parse(productsTextarea.value);
  renderProducts(newProducts);
});

function renderProducts(products) {
  productsList.innerHTML = '';
  products.forEach((product) => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product-container');

    const productTitle = document.createElement('p');
    productTitle.appendChild(document.createTextNode(product.name));
    productTitle.classList.add('product-title');

    const productPrice = document.createElement('p');
    productPrice.appendChild(document.createTextNode(product.price));
    productPrice.classList.add('product-price');

    const productImage = document.createElement('img');
    productImage.src = product.imageUrl;
    productImage.classList.add('product-image');

    productDiv.appendChild(productImage);
    productDiv.appendChild(productTitle);
    productDiv.appendChild(productPrice);

    productsList.appendChild(productDiv);
  });
}