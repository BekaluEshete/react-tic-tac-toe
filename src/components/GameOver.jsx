export default function GameOver({ winner, onPlayAgain }) {
    return (
        <div id="game-over">
            <h2>GameOver</h2>
        {winner && <p>Winner is {winner} </p> }
         {!winner && <p>It's a draw!</p>}
        
        <p>
            <button onClick={onPlayAgain}>Play Again</button>
        </p>
        </div>
    );
}