const API_URL = 'https://challenge.broobe.net/api/v1/';

export const get = async (url) => {
    const response = await fetch(`${API_URL}${url}`);
    const data = await response.json();
    return data;
}

export const post = async (url, body) => {
    const response = await fetch(`${API_URL}${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
    });
    const data = await response.json();
    if(!response.ok){
        throw new Error(data.message);
    }
    return data;
}
