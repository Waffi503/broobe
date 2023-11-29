import { get } from "./index";

export const getPriorities = async () => {
    let token = localStorage.getItem("token");
    
    try {
        const response = await get("priorities", token);
        return {
            status: 200,
            message: 'OK',
            data: response,
            error: "",
        };
    } catch (error) {
        return {
            status: 500,
            message: "Error en el servidor",
            error: error.message,
        };
    }
}
