import { api } from ".."

export const removeClient = async(id, token) => {
    try {
        const payload = {
            operation: "delete",
            payload: {
                Key: {
                    "id": id
                }
            }
        
        }
        await api.post(
            '/CreateClientFunction/cliente',
            payload,
            {
                headers: {
                    Authorization: token
                }
            }

        )
        
    } catch (error) {
        console.error(error)
        throw new Error(error)
    }
}