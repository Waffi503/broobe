const API_URL = 'https://challenge.broobe.net/api/v1/';

export const get = async (url) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}${url}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization':  `Bearer ${token}`
        },
    });
    const data = await response.json();
    return data;
}

export const post = async (url, body) => {
    const token = localStorage.getItem('token');

    const response = await fetch(`${API_URL}${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization':  `Bearer ${token}`
        },
        body: JSON.stringify(body),
    });
    const data = await response.json();
    if(!response.ok){
        throw new Error(data.message);
    }
    return data;
}

export const patch = async (url, body) => {
    const token = localStorage.getItem('token');

    const response = await fetch(`${API_URL}${url}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization':  `Bearer ${token}`
        },
        body: JSON.stringify(body),
    });
    const data = await response.json();
    if(!response.ok){
        throw new Error(data.message);
    }
    return data;
}

export const remove = async (url) => {
    const token = localStorage.getItem('token');

    const response = await fetch(`${API_URL}${url}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization':  `Bearer ${token}`
        },
    });
    const data = await response.json();
    if(!response.ok){
        throw new Error(data.message);
    }
    return data;
}
