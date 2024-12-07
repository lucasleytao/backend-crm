import { api } from ".."
import { v4 as uuidv4 } from "uuid"; 

export const createClient = async (nome, end, email, fone, tokenId) => {
    try {
        const payload = {
            operation: "create",
            payload: {
                Item: {
                    id: uuidv4(),
                    nome: nome,
                    endereco: end,
                    email: email,
                    fone: fone
                }
            }
        };
        const response = api.post(
            '/CreateClientFunction/cliente',
            payload,
            {
                headers: {
                    Authorization: tokenId
                }
            }
        )

        return response.data
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
} 