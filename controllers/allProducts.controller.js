import { clientServices } from "../service/client-service";


const createProduct = (image, name, price, id) => {
    const product = document.createElement('div');
    product.classList.add('product');
    const content = `
        <div class="parent">
            <a href="./update_product.html?id=${id}" class="edit__btn" data-edit><img src="../assets/img/edit.svg" alt=""></a>
            <button class="delete__btn" data-delete><img src="../assets/img/delete.svg" alt=""></button>
        </div>
        <img src="${image}" alt="${name}" class="product__image">
        <h4 class="product__title">${name}</h4>
        <p class="product__price">$${price}</p>
        <p class="product__id">#${id}</p>
    `;
    product.innerHTML = content;
    const deleteBtn = product.querySelector('[data-delete]');
    deleteBtn.addEventListener('click', () => {
        clientServices.deleteProduct(id)
            .then(() => {
                window.location.href = '/screens/all_products.html';
            });
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


