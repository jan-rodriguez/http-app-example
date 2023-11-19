import { useParams } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import React from 'react';


function Home() {
    const [item, setItem] = useState();
    const getItem = async (itemId) => {
        const response = await fetch(`http://localhost:8000/items/${itemId}`);
        const json = await response.json();
        setItem(json);
    };
    const {itemId} = useParams();
    useEffect(() => {
        if (itemId !== undefined) {
            getItem(itemId);
        }
    }, [itemId]);

    return (
        <div className="App">
            <div>{`At item ${itemId}`}</div>
            {item && <div>Item info: {item.random}</div>}
        </div>
    );
}

export default Home;
