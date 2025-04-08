import Player from "./components/Player";
import { useState } from "react";
import GameBored from "./components/GameBored";
import Log from "./components/Log";
import{WINNING_COMBINATIONS} from "./winning-combinations.js";
import GameOver  from "./components/GameOver.jsx";
const intialGameBored=[
  [null,null,null],
  [null,null,null],   
  [null,null,null]
]
function App() {
  const [gameState, setGameState] = useState([]);
  const [activePlayer,setActivePlayer]=useState("X");

  let gameBoard=[...intialGameBored.map((arr)=>[...arr])];
  for(const turn of gameState) {
      const {square:{row,col},player}=turn;
      gameBoard[row][col]=player;
  }
  let winner;
  for(const combination of WINNING_COMBINATIONS){
    const [first,second,third]=combination;
    const firstPlayer=gameBoard[first.row][first.column];
    const secondPlayer=gameBoard[second.row][second.column];
    const thirdPlayer=gameBoard[third.row][third.column];

    if(firstPlayer && firstPlayer===secondPlayer && firstPlayer===thirdPlayer){
      winner=firstPlayer;
     
      
    }
  }
  const isDraw=gameState.length===9 && !winner;
  function handleSelectSquare(rowIndex, playSymbolIndex){
    setActivePlayer((currentlyActive)=>currentlyActive==="X"?"O":"X");
    setGameState(
      (prevState) => {
        let currentPlayer="X";
        if(prevState.length>0 && prevState[0].player==="X" ){
          currentPlayer="O";

        }
        const updatedGameState = [{square:{row:rowIndex,col:playSymbolIndex},player:currentPlayer},...prevState];
      
      
        return updatedGameState;}
    )
  }
  function handlePlayAgain(){
    setGameState([]);
   
  }
  

  return (
   <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
      <Player name="Player 1" symbol="X" isActive={activePlayer==="X"} />
      <Player name="Player 2" symbol="O" isActive={activePlayer==="O"} />
      </ol>
      {( winner || isDraw ) && <GameOver winner={winner} onPlayAgain={handlePlayAgain}/> }
   < GameBored onSelect={handleSelectSquare} board= {gameBoard}/>

    </div>
    <Log turns={gameState}/>
   </main>
  );
}

export default App
