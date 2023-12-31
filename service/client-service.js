
const adminInfo = () => fetch('https://json-server-alura-geek.vercel.app/admin')
    .then((response) => response.json());

// const adminInfo = () => fetch('http://localhost:3000/admins')
//     .then((respuesta) => respuesta.json());

const getProducts = () => fetch('https://json-server-alura-geek.vercel.app/products')
    .then((response) => response.json());

const addProduct = (url, category, name, price, description, id) => {
    return fetch('https://json-server-alura-geek.vercel.app/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({image: url, category, name, price, description, id})
    });
};


const getSelectedProduct = (id) => fetch(`https://json-server-alura-geek.vercel.app/products/${id}`)
    .then((response) => response.json());

const updateProduct = (url, category, name, price, description, id) => {
    return fetch(`https://json-server-alura-geek.vercel.app/products/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({image: url, category, name, price, description})
    });
};

const deleteProduct = (id) => {
    return fetch(`https://json-server-alura-geek.vercel.app/products/${id}`, {
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