import { post } from './index.js';


export const login = async (body) => {
    
    try{
        const response = await post('login', body);
        localStorage.setItem('token', response.token);
        return response.token;

    } catch (error) {
        console.log(error);
        return null;          
    }
}

export const signup = async (body) => {
    
    try{
        const response = await post('users', body);
        return  {
            status: response.status,
            message: response.message,
            data: response.data,
            error:''
        };
    } catch (error) {
        return {
            status: 500,
            message: 'Error en el servidor',
            error: 'Fail to create user'
        };          
    }
}