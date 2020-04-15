export default {
    getProducts: () => {
        return fetch('https://my-json-server.typicode.com/jubs16/Products/Products')
        .then(res => res.json())
    },
    getProduct(id) {

    },
    
    updateProduct: (id) => {
        
    },
    removeProduct: () => {

    }
}