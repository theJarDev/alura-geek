import { clientServices } from "../service/client-service";

const makeId = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

const productForm = document.querySelector('[data-formProduct]');

productForm.addEventListener('submit', event => {
    event.preventDefault();
    const url = document.querySelector('[data-url]').value;
    const category = document.querySelector('[data-category]').value;
    const name = document.querySelector('[data-name]').value;
    const price = document.querySelector('[data-price]').value;
    const description = document.querySelector('[data-description]').value;
    const id = makeId(7);

    clientServices.addProduct(url, category, name, price, description, id)
        .then(() => {
            window.location.href = '/screens/all_products.html';
        })
        .catch(err => console.log(err));
});