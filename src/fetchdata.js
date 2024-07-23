const productos = [];
const categorias = ['Todo'];

fetch('../public/productos_db.json')
.then(response => response.json())
.then(response => agregarProductos(response))


function agregarProductos(productos_json) {
    productos_json.forEach(item => {
        productos.push(item)
    })};

function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos);
        }, 3000);
    });
};


export default fetchData;