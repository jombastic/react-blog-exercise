import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    // grab the data but call it blogs
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

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