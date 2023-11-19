import {useEffect, useState} from 'react';
import './App.css';



function Home() {
    const [items, setItems] = useState([]);
    const getResponse = async () => {
        // TODO: Figure out what to show if this errors
        const serverResponse = await fetch("http://localhost:8000/");
        const jsonResponse = await serverResponse.json();
        setItems(jsonResponse);
    }

    useEffect(() => {
        getResponse();
    }, []);

    return (
        <div className="App">
        <header className="App-header">
            {items.map((item) => <a href={`item/${item.id}`}>{item.name}</a>)}
        </header>
        </div>
    );
}

export default Home;
