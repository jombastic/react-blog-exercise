const Home = () => {
    const handleClick = (event) => {
        console.log('hello, ninjas', event);
    } 

    const handleClickAgain = (name, event) => {
        console.log('hello, ' + name, event.target);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(event) => handleClickAgain('slavcho', event)}>Click me again</button>
        </div>
    );
}

export default Home;