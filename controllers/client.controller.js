import clientService from "../services/client.service.js"


async function createClient(req, res, next) {
    try {
        let client = req.body;
        if (!client.name || !client.cpf || !client.phone || !client.email || !client.adress) {
            throw new Error("Nome, CPF, telefone, email e endereço são obrigatórios!");
        }  
        
        res.send(await clientService.createClient(client));
        logge.info(`POST /client - ${JSON.stringify(client)}`)
    } catch (err) {
        next(err);
    }
    
}
export default {
    createClient
}