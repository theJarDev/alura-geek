import { clientServices } from "../service/client-service.js";

const loginForm = document.querySelector('[data-loginForm]');

loginForm.addEventListener('submit', event => {
    event.preventDefault();
    const email = document.querySelector('[data-email]').value;
    const password = document.querySelector('[data-password]').value;

    clientServices.adminInfo()
        .then(data => {
            let found = false;
            data.forEach(admin => {
                if (admin.email === email && admin.password === password) {
                    found = true
                    window.location.href = 'all_products.html';
                }
            });
            if (!found) {
                alert('Su correo o contraseña son incorrectos');
            }
        })
        .catch(err => console.log(err));
});