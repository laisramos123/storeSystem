import productRepository from "../repositories/product.repository.js";

async function createProduct(product){
     return await productRepository.insertProduct(product);
}

async function getProducts(){
    return await productRepository.getProducts();
}
export default{
    createProduct,
    getProducts
}