import { api } from ".."

export const getClients = async (token) => {
    try {
        const payload = {
            operation: "scan",
        };
        const response = await api.post(
            '/CreateClientFunction/cliente',
            payload,
            {
                headers: {
                    Authorization: token
                }
            }
        )   

        return response.data
    } catch (error) {
        console.error(error)
        throw new Error(error)
    }
}