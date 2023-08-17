
const adminInfo = () => fetch('http://localhost:3000/admin')
    .then((response) => response.json());

// const adminInfo = () => fetch('http://localhost:3000/admins')
//     .then((respuesta) => respuesta.json());

const getProducts = () => fetch('http://localhost:3000/products')
    .then((response) => response.json());

const addProduct = (url, category, name, price, description, id) => {
    return fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({image: url, category, name, price, description, id})
    });
};


const getSelectedProduct = (id) => fetch(`http://localhost:3000/products/${id}`)
    .then((response) => response.json());

const updateProduct = (url, category, name, price, description, id) => {
    return fetch(`http://localhost:3000/products/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({image: url, category, name, price, description})
    });
};

const deleteProduct = (id) => {
    return fetch(`http://localhost:3000/products/${id}`, {
        method: 'DELETE',
    });
};


export const clientServices = {
    adminInfo,
    addProduct,
    getProducts,
    getSelectedProduct,
    updateProduct,
    deleteProduct,
};