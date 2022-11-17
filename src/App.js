import React from 'react';
import './App.css';
import Button from "./Components/Button";
import BagOne from "./assets/bag_1.png";
import BagTwo from "./assets/bag_2.png";
import BagThree from "./assets/bag_3.png";
import BagFour from "./assets/bag_4.png";
import Product from "./Components/Product";

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


                <Product
                    spanText="Best seller"
                    image={BagOne}
                    title="pink hand bag"
                    description="The handy bag"
                    price="€ 400,-"
                />


                <Product
                    spanText="Best seller"
                    image={BagTwo}
                    title="brown bag"
                    description="The stylish bag"
                    price="€ 250,-"
                />

                <Product
                    spanText="New collection"
                    image={BagThree}
                    title="forestgreen bag"
                    description="The simple bag"
                    price="€ 300,-"
                />


                <Product
                    spanText="New collection"
                    image={BagFour}
                    title="orange bag"
                    description="The trendy bag"
                    price="€ 150,-"
                />

            </main>


        </>
    );
}

export default App;



