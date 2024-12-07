import { api } from ".."

export const updateClient = (cliente, token) => {
    try {
        const payload = {
            operation: "update",
                payload: {
                Key: {
                    "id": cliente.id
                },
                UpdateExpression: "SET email = :email, nome = :nome, fone = :fone, endereco = :endereco",
                    ExpressionAttributeValues: {
                        ":email": cliente.email,
                        ":nome": cliente.nome,
                        ":fone": cliente.fone,
                        ":endereco": cliente.end
                    }
                }
            }
            
        const response = api.post(
            '/CreateClientFunction/cliente',
            payload,
            {
                headers: {
                    Authorization: token
                }
            }
        )
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error(error)
        throw new Error(error)
    }
}