
const [searchInput1, searchInput2] = document.querySelectorAll('[data-searchInput]');
const [searchBtn1, searchBtn2] = document.querySelectorAll('[data-searchBtn]');

searchBtn1.addEventListener('click', () => {
    window.location.href = `screens/search_product.html?search=${searchInput1.value}`;
    searchInput1.value = '';
});

searchBtn2.addEventListener('click', () => {
    window.location.href = `screens/search_product.html?search=${searchInput2.value}`;
    searchInput2.value = '';
});