import React from 'react';
import './Question.css';

function Question({ handleCardShuffler }) {
    return (
        <div>
            <div className='gameContainer'>
                <h2>Have you seen this player yet?</h2>
                <button onClick={() => handleCardShuffler(true)}>Yes</button>
                <button onClick={() => handleCardShuffler(false)}>No</button>
            </div>
        </div>
    )
}

export default Question;