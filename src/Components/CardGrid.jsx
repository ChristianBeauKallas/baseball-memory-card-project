import React from 'react';
import Card from './Card';

function CardGrid({ card, handleCardShuffler }) {
    return (
        <div className="cardGrid">
            <Card card={card} onClick={handleCardShuffler} />
        </div>
    );
}

export default CardGrid;