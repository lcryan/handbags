import React from 'react';
import './App.css';
import Button from "./Components/Button";

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button
                    buttonText="to the collection"
                />
                <Button
                    buttonText="shop all bags"
                />
                <Button
                    buttonText="preorder"
                    toBeDisabled={true}
                />
            </nav>
        </>
    );
}

export default App;



