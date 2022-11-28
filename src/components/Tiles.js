import React from 'react';

function Tiles(props) {
    return (
        <section className="Tile">
            <h2 className="title">{props.title}</h2>
            <img src={props.image} alt={props.alt}/>
            {props.children}
        </section>
    );
}

export default Tiles;