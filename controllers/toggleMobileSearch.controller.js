

const btn = document.querySelector('[data-toggleMobile]');
const searchBar = document.querySelector('[data-mobileSearch]');

btn.addEventListener('click', () => {
    searchBar.classList.toggle('-mt-15');
});