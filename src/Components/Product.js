import React from 'react';
/*import BagOne from "../assets/bag_1.png";*/

function Product(props) {
    return (
        <div>
            <article className= "Product">
                <span className="product-status">{props.spanText}</span>
                <img src={props.image} alt={props.title}/>
                <p className="description">{props.description}</p>
                <h4 className="price">{props.price}</h4>

            </article>

        </div>
    );
}

export default Product;

/*function Product(props) {
    return (
        <div>
            <article className="Product">
                <img src={props.image} alt={props.title}/>
                <h2 className="product-name">{props.title}</h2>
                <p className="product-description">{props.description}</p>
            </article>
        </div>);
}

export default Product;*/
