
const searchInput = document.querySelector('[data-searchInput]');
const searchBtn = document.querySelector('[data-searchBtn]');

searchBtn.addEventListener('click', () => {
    window.location.href = `search_product.html?search=${searchInput.value}`;
    searchInput.value = '';
});