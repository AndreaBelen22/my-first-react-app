import './App.css';
import Title from './components/Title'
import Pokemon from "./components/Pokemon"
import React from "react";


function App() {
    return (
        <div className="App">
            <main>
                <Title content="Some example title"/>
                <Pokemon/>
            </main>
        </div>
    );
}

export default App;