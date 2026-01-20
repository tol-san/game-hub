import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://api.gamebrain.co/v1", 
    headers: {
        "Authorization": "Bearer 0dacbc81e3284e09a53062d5f3d567de", 
        "Content-Type": "application/json",
    },
});

export default apiClient;