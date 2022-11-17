import React from 'react';
import './App.css';
import Button from "./Components/Button";
import BagOne from "./assets/bag_1.png";
import BagTwo from "./assets/bag_2.png";
import BagThree from "./assets/bag_3.png";
import BagFour from "./assets/bag_4.png";
import Product from "./Components/Product";

import Brand from "./assets/brand.png";
import OurStory from "./assets/our_story.png";
import Tiles from "./Components/Tiles";


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
            <footer>

                <Tiles
                    title="The brand"
                >
                    <p> Torem insum dolor sit amer. consectetur
                        dalpisicing ell. Allquia culpa dolorun
                        enim excepturi, fuga pariatur
                        oroesentium aula sequi similique sunt
                    </p>
                    <p>Torem losum dolor sit amer. consecretur
                        adipisicina elit. Aliquid culpa dolorum
                        enim excepturi, fuga pariatur
                        ordesentum alia sequi similique sunt</p>
                </Tiles>

                <Tiles
                    image={Brand}
                    alt="brand-logo"
                />

                <Tiles
                    image={OurStory}
                    alt="two females embracing each other"
                />

                <Tiles
                    title="Our story"
                >

                    <p>Lorem losur 100 Sit amet. consecietu adipisicing elit. Blanditiis eligend
                        exercitationem illo abore laboriosam
                        nini omnis praesentum. Aspernatu
                        cum deleniti excepturi itaque,
                        Jaboriosam nisi rerum sunt. A
                        rebellenaus tenetur veniam</p>
                </Tiles>

            </footer>

        </>
    );
}

export default App;



