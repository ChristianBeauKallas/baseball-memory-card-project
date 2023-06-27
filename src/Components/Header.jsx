import React from 'react';
import './Header.css';

const Header = ({ score, highScore }) => {
    return (
        <header className="appHeader">
            <h1>The Baseball Memory Game</h1>
            <div className='questionContainer'>
                <p>Objective: Click yes if you've seen this player before in this game cycle, no if you haven't. <br></br>Don't forget, the order shuffles each time!</p>
            </div>
        </header>
    );
};

export default Header;