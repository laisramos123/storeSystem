import clientRepository from "../repositories/client.repository"
async function createClient(client){
    return await clientRepository.insertClient(client);
}

export default {
    createClient
}