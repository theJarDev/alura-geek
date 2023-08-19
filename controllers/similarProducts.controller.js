import { clientServices } from "../service/client-service.js";

const createProduct = (image, name, price, id) => {
    const product = document.createElement('div');
    product.classList.add('product');
    const content = `
        <img src="${image}" alt="${name}" class="product__image">
        <h4 class="product__title">${name}</h4>
        <p class="product__price">$${price}</p>
        <button class="product__seeProduct" data-seeProduct>Ver producto</button>
    `;
    product.innerHTML = content;
    const btn = product.querySelector('[data-seeProduct]');

    btn.addEventListener('click', () => {
        window.location.href = `product_details.html?id=${id}`;
    });

    
    return product;
};

const container = document.querySelector('[data-products]');

clientServices.getProducts()
    .then(data => {
        data.forEach(product => {
            const newProduct = createProduct(product.image, product.name, product.price, product.id);
            container.appendChild(newProduct);
        });
    })
    .catch(err => console.log(err));