import{ useState } from "react";

export default function GameBored({onSelect,board}) {
   
    
    return(
        <ol id="game-board">
            {
                board.map((row, rowIndex) => (
                    <li key={rowIndex} >
                            <ol>

                        {row.map((playSymbol, playSymbolIndex) => (
                                <li key={playSymbolIndex} >
                                   <button disabled={playSymbol!==null} onClick={()=>onSelect(rowIndex,playSymbolIndex)}>{playSymbol} </button>
                                </li>
                            
                            
                        ))}
                            </ol>

                    </li>
                ))
            }

        </ol>
    )
}