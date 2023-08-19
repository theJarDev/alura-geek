import { clientServices } from "../service/client-service.js";

const id = new URLSearchParams(document.location.search).get('id');

const url = document.querySelector('[data-url]');
const category = document.querySelector('[data-category]');
const name = document.querySelector('[data-name]');
const price = document.querySelector('[data-price]');
const description = document.querySelector('[data-description]');

clientServices.getSelectedProduct(id)
    .then(product => {
        url.value = product.image;
        category.value = product.category;
        name.value = product.name;
        price.value = product.price;
        description.value = product.description;
    })
    .catch(err => console.log(err));

const editForm = document.querySelector('[data-formEdit]');

editForm.addEventListener('submit', event => {
    event.preventDefault();
    clientServices.updateProduct(url.value, category.value, name.value, price.value, description.value, id)
        .then(() => {
            window.location.href = 'all_products.html';
        })
        .catch(err => console.log(err));
});