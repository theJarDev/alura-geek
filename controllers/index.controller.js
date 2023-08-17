import { clientServices } from "../service/client-service";

const categorySection = document.querySelector('[data-category]');
let counter = 0;

const createCategory = (category) => {
    counter++;
    const categoryContainer = document.createElement('div');
    categoryContainer.classList.add('category');
    const content = `
        <div class="category__name" id="category-${counter}">
            <h3 class="category__name--title">${category}</h3>
            <a href="./screens/all_products_client.html" class="category__name--seeAll">
                <div class="flex">
                <p>Ver todo</p><img src="assets/arrow.svg" alt="flecha">
                </div>
            </a>
        </div>
        <div class="category__products" data-products>

        </div>
    `;
    categoryContainer.innerHTML = content;

    // createProduct(image, name, price, id);

    return categoryContainer;
};

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
        window.location.href = `screens/product_details.html?id=${id}`;
    });

    
    return product;
};

// const container = document.querySelector('[data-products]');
const categories = [];

clientServices.getProducts()
    .then(data => {

        data.forEach(product => {
            if( !categories.includes(product.category) ){
                categories.push(product.category);
            }
        });

        categories.forEach(category => {
            const newCategory = createCategory(category);
            const container = newCategory.querySelector('[data-products]');
            categorySection.appendChild(newCategory);

            const result = data.filter(product => {
                return product.category === category;
            });

            result.forEach(product => {
                const newProduct = createProduct(product.image, product.name, product.price, product.id);
                container.appendChild(newProduct);
            });
        });

        // data.forEach(product => {
        //     const newProduct = createProduct(product.image, product.name, product.price, product.id);
        //     container.appendChild(newProduct);
        // });
    })
    .catch(err => console.log(err));


