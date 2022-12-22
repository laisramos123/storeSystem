
import supplierService from "../services/supplier.service.js"


async function createSupplier(req, res, next) {
    try {
        let supplier = req.body;
        if (!supplier.name || !supplier.cnpj || !supplier.phone || !supplier.email || !supplier.adress) {
            throw new Error("Name, CNPJ, phone, email e adress são obrigatórios!");
        }  
        
        res.send(await supplierService.createSupplier(supplier));
        logger.info(`POST /supplier - ${JSON.stringify(supplier)}`)
    } catch (err) {
        next(err);
    }
    
}
async function getSuppliers(req,res,next){
    try {
        res.send(await supplierService.getSuppliers());
        logger.info("GET /supplier");
    } catch (err) {
        next(err);
    }
}

async function getSupplier(req,res,next){
    try {
        res.send(await supplierService.getSupplier(req.params.id));
    logger.info("GET /supplier");
    } catch (err) {
        next(err);
    }
}

async function deleteSupplier(req,res,next){
    try {
        await supplierService.deleteSupplier(req.params.id);
        res.end();
        logger.info("DELETE /supplier");
    } catch (err) {
        next(err);
    }
}

async function updateSupplier(req,res,next){
    try {
        let supplier = req.body;
        if (!supplier.supplier_id || !supplier.name || !supplier.cnpj || !supplier.phone || !supplier.email || !supplier.adress) {
            throw new Error("Supplier ID, Name, CNPJ, phone, email e adress são obrigatórios!");
        }  
        supplier = await supplierService.updateSupplier(supplier);
        res.send(supplier);
        logger.info(`PUT /supplier - ${JSON.stringify(supplier)}`)
    } catch (err) {
        next(err);
    }
}

export default {
    createSupplier,
    getSuppliers,
    getSupplier,
    deleteSupplier,
    updateSupplier
}