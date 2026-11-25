import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 10000, // Set a timeout of 10 seconds
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;