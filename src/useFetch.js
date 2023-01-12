import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(response => {
                    if (!response.ok)
                        throw Error('Could not fetch the data for that resource');

                    // returns async data so we need another then below
                    return response.json()
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    setError(err.message)
                    setIsPending(false);
                })
        }, 1000);
    }, [url]);

    return {data, isPending, error}
}

export default useFetch;