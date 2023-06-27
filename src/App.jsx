import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import CardGrid from './Components/CardGrid';
import Question from './Components/Question';
import Scoreboard from './Components/Scoreboard';
import barryBonds from './Assets/PlayerPhotos/BarryBonds.png';
import derekJeter from './Assets/PlayerPhotos/DerekJeter.png';
import alexRodriguez from './Assets/PlayerPhotos/AlexRodriguez.png';
import fernandoTatis from './Assets/PlayerPhotos/FernandoTatis.png';
import javyBaez from './Assets/PlayerPhotos/JavyBaez.png';
import mannyMachado from './Assets/PlayerPhotos/MannyMachado.png';
import mikeTrout from './Assets/PlayerPhotos/MikeTrout.png';
import mookieBetts from './Assets/PlayerPhotos/MookieBets.png';
import ronaldAcuna from './Assets/PlayerPhotos/RonaldAcuna.png';
import aaronJudge from './Assets/PlayerPhotos/AaronJudge.png';


function App() {
  // State variables using useState hook
  const [score, setScore] = useState(0); // Current score
  const [highScore, setHighScore] = useState(0); // Highest score achieved
  const [gameEnded, setGameEnded] = useState(false); // Indicates if the game has ended
  const [cards, setCards] = useState([

    // Array of card objects
    {id: 1, name: 'Barry Bonds', image: barryBonds, seen: false},
    {id: 2, name: 'Derek Jeter', image: derekJeter, seen: false},
    {id: 3, name: 'Alex Rodriguez', image: alexRodriguez, seen: false},
    {id: 4, name: 'Aaron Judge', image: aaronJudge, seen: false},
    {id: 5, name: 'Fernando Tatis', image: fernandoTatis, seen: false},
    {id: 6, name: 'Javy Baez', image: javyBaez, seen: false},
    {id: 7, name: 'Manny Machado', image: mannyMachado, seen: false},
    {id: 8, name: 'Mike Trout', image: mikeTrout, seen: false},
    {id: 9, name: 'Mookie Betts', image: mookieBetts, seen: false},
    {id: 10, name: 'Ronald Acuna', image: ronaldAcuna, seen: false}, 
  ]);

  // Function to reset the game state
  const resetGame = () => {
    setScore(0);
    setGameEnded(false);
    setCards(cards.map(card => ({...card, seen: false})));
  };

  const handleCardShuffler = (userSaidYes) => {
    const newCards = cards.map(card => ({ ...card }));
    const currentCard = newCards[0];
  
    if ((userSaidYes && currentCard.seen) || (!userSaidYes && !currentCard.seen)) {
      setScore(prevScore => prevScore + 1); 
      currentCard.seen = true;
    } else {
      setGameEnded(true);
      return;
    }
  
    if (newCards.every(card => card.seen)) {
      setGameEnded(true);
    }
  
    setHighScore(prevHighScore => Math.max(score + 1, prevHighScore)); 
  
    if (!gameEnded) {
      for (let i = newCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newCards[i], newCards[j]] = [newCards[j], newCards[i]];
      }
    }
    setCards(newCards);
  };
  

  // useEffect hook to handle game-ending logic and user prompts
  useEffect(() => {
    if (gameEnded) {
      if (cards.every(card => card.seen)) {
        const playAgain = window.confirm("You have seen all the cards! Would you like to play again?");
        if (playAgain) {
          resetGame(); // Reset the game if the user chooses to play again
        }
      } else {
        alert("You guessed incorrectly! The game will now reset.");
        resetGame(); // Reset the game if the user guessed incorrectly
      }
    }
  }, [gameEnded, cards, resetGame]);

  // Render the component's UI
  return (
    <div className="App">
      <Header /> 
      <Scoreboard score={score} highScore={highScore} /> {/* Display the score and high score */}
      <div className='gameRow'>
        <CardGrid card={cards[0]} handleCardShuffler={handleCardShuffler} /> {/* Render the current card and handle user input */}
        <Question handleCardShuffler={handleCardShuffler} /> {/* Render the question component and handle user input */}
      </div>
    </div>
  );
}

export default App;

