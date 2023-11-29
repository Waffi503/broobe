import {get} from './index';

export const getIssues = async () => {
    let token = localStorage.getItem('token');
    try{
        const response = await get('issues',token);
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
            error: error.message
        };          
    }
}

export const getIssue = async (id) => {
    try{
        const response = await get(`issues/${id}`);
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
            error: error.message
        };          
    }
}

export const addIssue = async (body) => {
    try{
        const response = await post('issues', body);
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
            error: error.message
        };          
    }
}

export const updateIssue = async (id, body) => {
    try{
        const response = await put(`issues/${id}`, body);
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
            error: error.message
        };          
    }
}