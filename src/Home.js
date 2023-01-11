import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(response => {
                // returns async data so we need another then below
                return response.json()
            })
            .then(data => {
                setBlogs(data);
            })
    }, []);

    return (
        <div className="home">
            {/* if blogs is true the html on the right side is evaluated and rendered */}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
        </div>
    );
}

export default Home;