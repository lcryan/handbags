import React from 'react';
import './App.css';
import Button from "./Components/Button";
import BagOne from "./assets/bag_1.png";
import BagTwo from "./assets/bag_2.png";
import BagThree from "./assets/bag_3.png";
import BagFour from "./assets/bag_4.png";

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
                    <span>Best seller</span>
                    <img src='./assets/bag_1.png' alt={BagOne}/>
                    <p>The handy bag</p>
                    <h4>€ 400,-</h4>

                </article>


                <article>
                    <span> Best seller </span>
                    <img src='./assets/bag_2.png' alt={BagTwo}/>
                    <p>The stylish bag</p>
                    <h4>€ 250,-</h4>
                </article>

                <article>
                    <span> New collection</span>
                    <img src='./assets/bag_3.png' alt={BagThree}/>
                    <p>The simple bag</p>
                    <h4>€ 300,-</h4>
                </article>

                <article>
                    <span>New collection</span>
                    <img src='./assets/bag_4.png' alt={BagFour}/>
                    <p>The trendy bag</p>
                    <h4>€ 150,-</h4>
                </article>

            </main>


        </>
    );
}

export default App;



