import { useState, useEffect } from 'react';

export default function useFetch(getData, body = null){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getData(body);
                console.log(response, 'response');
                setData(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [body, getData]);

    return { data, loading, error };
}