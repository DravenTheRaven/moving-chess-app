import Square from './Square.js'
import MoveList from './MoveList.js';
import ToMove from './ToMove.js';

import { useState } from 'react';

export default function Board({ pieces, handlePieces }) {
  let [activePiece, setActivePiece] = useState('');
  let [originSquare, setOriginSquare] = useState('');
  let [destination, setDestination] = useState('');

    /*on click events. the first chooses a piece and finds its legal moves*/ 
  function handleActivePiece(pieceName) {
    setActivePiece(pieceName)
    
  }
  
  function handleOriginSquare(coordinates) {
    setOriginSquare(coordinates)
  }
  

  function handleDestination(coordinates) {
    setDestination(coordinates)
  }

  /*generates an 8x8 grid. can be modified to suit any dimensions
  but the css would have to be changed as well */

  /*coordinates are kept as a number because i find them easier
    to manipulate in the code that was. end user facing text 
    will be cast to proper chess notation */
  let boardList = [];
  for (let i=8; i >= 1; i--) {
    for (let j=1; j <= 8; j++) {
      let rank = i;
      let file = j;
      let coordinates = `${file}${rank}`
      boardList.push(
        <Square className='square' 
                value={`${file}${rank}`} 
                rank={i} 
                file={file} 
                key={`${file}${rank}`}
                coordinates={coordinates} 
                pieces={pieces}
                handleActivePiece={handleActivePiece}
                handleOriginSquare={handleOriginSquare}
                originSquare={originSquare}
                activePiece={activePiece}
                destination ={destination}
                handleDestination={handleDestination}
                handlePieces={handlePieces}
                />)

    }
  }



  return(
    <>
    <div id='chessBoard'>
      <div id='squareContain'>{boardList}</div>
    </div>
    <MoveList/>
    <ToMove/>
  
    <div id='positions'></div>
  </>
  )
}