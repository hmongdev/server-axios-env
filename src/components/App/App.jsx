import axios from 'axios';
import './App.css';
import { useState } from 'react';

function App() {
    //! 13. local state
    const [gifs, setGifs] = useState([]);

    //! 9. client-side => handleClick function
    const handleClick = () => {
        axios
            .get('/gif')
            .then((response) => {
                console.log(`Response is`, response);
                //! 14. setGifs
                setGifs(response.data.data);
            })
            .catch((err) => {
                console.log(`ERR in app.jsx`, err);
            });
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">APIS</h1>
                <h4>
                    <i>APIS</i>
                </h4>
                {/* //! 8. create button */}
                <button onClick={handleClick}>GIFs Button</button>
            </header>
            <br />
            {/* //! 15. .map and gifs */}
            {gifs.map((gif, i) => {
                return <img key={i} src={gif.images.original.url} />;
            })}
        </div>
    );
}

export default App;
