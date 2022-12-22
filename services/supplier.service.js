import supplierRepository from "../repositories/supplier.repository.js"
async function createSupplier(supplier){
    return await supplierRepository.insertsupplier(supplier);
}

async function getSuppliers(){
    return await supplierRepository.getSuppliers();
}

export default {
    createSupplier,
    getSuppliers,
    
}