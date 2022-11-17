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

            <main>

                <article>
                    <span>
                        <p>Best seller</p>
                    </span>
                </article>


                <article>
                    <span>
                        <p>Best seller</p>
                    </span>
                </article>


                <article>
                <span>
                    <p>New collection</p>
                </span>
                </article>


                <article>
                    <span>
                        <p>New collection</p>
                    </span>
                </article>

            </main>


        </>
    );
}

export default App;



