import axios from "axios";

export const api = axios.create({
    baseURL: 'https://9vgvod1388.execute-api.us-east-1.amazonaws.com/dev',
})