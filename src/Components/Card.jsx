import React from 'react';
import './Card.css'

function Card({ card, onClick }) {
    return (
        <div className="card" onClick={() => onClick(card.id)}>
            <img src={card.image} alt={card.name} />
        </div>
    );
}

export default Card;