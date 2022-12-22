import saleRepository from "../repositories/sale.repository.js"
async function createClient(sale){
    return await saleRepository.insertSale(sale);
}

async function getSale(){
    return await saleRepository.getSales();
}

export default {
    createSale,
    getSales,
    
}