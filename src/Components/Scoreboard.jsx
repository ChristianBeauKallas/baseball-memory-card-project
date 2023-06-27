import React from 'react';
import './Scoreboard.css';

function Scoreboard({ score, highScore }) {
    return (
        <div>
            <div className="scoreboardContainer">
                <h2>Scoreboard</h2>
                <table className="scoreboard">
                    <thead>
                        <tr>
                            <th>Current Score</th>
                            <th>Best Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="score">{score}</td>
                            <td className="score">{highScore}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Scoreboard;