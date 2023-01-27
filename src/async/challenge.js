import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1"; // link de la API
async function fetchData(urlApi){
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

const anotherfn = async (UrlApi)=>{
    try{
        const products = await fetchData(`${UrlApi}/products`);
        const product_selector = await fetchData(`${UrlApi}/products/${products[0].id}`);
        const category = await fetchData(`${UrlApi}/categories/${product_selector.category.id}`);
        console.log(products);
        console.log(product_selector.title);
        console.log(category.name);
    }catch(error){
        console.log(error);
    }
}
anotherfn(API);