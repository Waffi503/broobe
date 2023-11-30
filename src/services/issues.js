import {get, post, patch, remove} from './index';

export const getIssues = async () => {
    let token = localStorage.getItem('token');
    try{
        const response = await get('issues',token);
        return  {
            status: 200,
            message: 'OK',
            data: response,
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
            status: 200,
            message: 'OK',
            data: response,
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
        const response = await patch(`issues/${id}`, body);
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

export const deleteIssue = async (id) => {
    try{
        const response = await remove(`issues/${id}`);
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