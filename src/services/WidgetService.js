import api from "./api";

export const getWidgets = async (signal) => {
    const response = await api.get("/posts", {
        signal
    })
    return response.data;
}