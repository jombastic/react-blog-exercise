import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(response => {
                    if (!response.ok)
                        throw Error('Could not fetch the data for that resource');
                        
                    // returns async data so we need another then below
                    return response.json()
                })
                .then(data => {
                    setBlogs(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    setError(err.message)
                    setIsPending(false);
                })
        }, 1000);
    }, []);

    return (
        <div className="home">
            { error && <div>{ error } </div>}
            {isPending && <div>Loading...</div>}
            {/* if blogs is true the html on the right side is evaluated and rendered */}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
        </div>
    );
}

export default Home;