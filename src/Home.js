import { useState } from "react";

const Home = () => {
    // let name = 'Slavcho';
    const [name, setName] = useState('slavcho');
    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName('jomba');
        setAge(32);
    } 

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default Home;