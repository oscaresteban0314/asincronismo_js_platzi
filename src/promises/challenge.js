import fetch from 'node-fetch'; //llamamos la dependencia node fetch
const API = "https://api.escuelajs.co/api/v1"; // link de la API

function fetchData(UrlAPI){ //funcion transformable
    return fetch(UrlAPI);
}

/* fetchData(`${API}/products`)//hacemos catch del elemento productos de la API
.then (response=>response.json()) //lo volvemos un objeto
.then(products =>{
    console.log(products);
})
.then(() => {
    console.log('Hola');
})
.catch(error => console.log(error)); */

fetchData(`${API}/products`)
.then(response=>response.json()) //llamamos todos los productos
.then(products =>{
    console.log(products);
    return fetchData(`${API}/products/${products[1].id}`); //lamamos el id del producto 1
})
.then(response=>response.json())
.then(products =>{
    console.log('Name:'+products.title);//imprimimos el nombre del produxto
    return  fetchData(`${API}/categories/${products.category.id}`); // llamamos la categoria del producto
})
.then(response=>response.json())
.then(category =>{
    console.log('category:'+category.name);//imprimimos la categoria del producto
})
.catch(err=>console.log(err))
.finally(()=> console.log('Finalizada la clase'))
;


