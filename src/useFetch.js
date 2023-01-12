import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // used for aborting the fetch when the component that uses it is unmounted
        const abortCont = new AbortController();

        setTimeout(() => {
            // we associate the abort controller with the signal property of the fetch
            fetch(url, { signal: abortCont.signal })
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
                    // when we abort, the fetch throws an error and we catch it here
                    // we don't want it to update the state so we check for it by its name
                    if (err.name !== 'AbortError') {
                        setError(err.message)
                        setIsPending(false);
                    } else {
                        console.log('fetch aborted')
                    }
                })
        }, 1000);

        // returned cleanup function that fires when the component that uses useEffect unmounts
        return () => abortCont.abort();
    }, [url]);

    return {data, isPending, error}
}

export default useFetch;