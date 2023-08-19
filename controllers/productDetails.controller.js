import { clientServices } from "../service/client-service.js";

const id = new URLSearchParams(document.location.search).get('id');

const container = document.querySelector('[data-productDetails]');

clientServices.getSelectedProduct(id)
    .then(product => {
        const productDetails = document.createElement('div');
        productDetails.classList.add('product-details', 'container');

        const content = `
            <img src="${product.image}" alt="${product.name}" class="product-details__image">
            <div class="product-details__info">
                <h2 class="product-details__info--title">${product.name}</h2>
                <p class="product-details__info--price">$ ${product.price}</p>
                <p class="product-details__info--description">${product.description}</p>
            </div>
        `;

        productDetails.innerHTML = content;
        container.appendChild(productDetails);

    })
    .catch(err => console.log(err));


/* <div class="product-details container">
    <img src="../assets/img/products/star-wars/taza.jfif" alt="imagen del producto" class="product-details__image">
    <div class="product-details__info">
        <h2 class="product-details__info--title">Producto XYZ</h2>
        <p class="product-details__info--price">$60.00</p>
        <p class="product-details__info--description">Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam</p>
    </div>
</div> */