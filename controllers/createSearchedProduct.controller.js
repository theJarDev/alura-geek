import { clientServices } from "../service/client-service";

const searched = new URLSearchParams(document.location.search).get('search');

const title = document.querySelector('[data-title]');
title.innerHTML = `<h3 class="category__name--title">Resultados de búsqueda para: "${searched}" </h3>`;

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
        window.location.href = `/screens/product_details.html?id=${id}`;
    });

    
    return product;
};

const container = document.querySelector('[data-products]');

clientServices.getProducts()
    .then(data => {

        // const result = data.filter(product => product.name === searched);

        const filterProducts = (query) => {
            return data.filter(product => {
                return product.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
            });
        };

        const result = filterProducts(searched);


        if(result.length > 0) {

            result.forEach(product => {
                const newProduct = createProduct(product.image, product.name, product.price, product.id);
                container.appendChild(newProduct);
            });

        } else {
            container.innerHTML = '<p class="category__name--notFound"> Lo sentimos, ningún producto coincide con su búsqueda. </p>';
        }
        
    })
    .catch(err => console.log(err));


