import React from 'react';
import Square from 'chessBoard/Square.js'
import { useState } from 'react';
import { whitePawn, whiteKnight, whiteBishop, whiteRook, whiteQueen, whiteKing} from 'index.js'


export default function ChessBoard({ whitePiecesState, blackPiecesState, handleWhitePieces, handleBlackPieces, turn, handleTurn }) {
  const [isActive, setIsActive] = useState(false);
  const [originSquare, setOriginSquare] = useState('');
  const [activePiece, setActivePiece] = useState('');
  const [destination, setDestination] = useState('');
  let boardList = [];
  let files = ['h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];

  function handleOriginSquare(coordinates) {
    setOriginSquare(coordinates)
    
  }
  
  function handleActivePiece(pieceName) {
    setActivePiece(pieceName)
  }
  
  function handleOriginSquare(coordinates) {
    setOriginSquare(coordinates)
  }

  function handleDestination(coordinates) {
    setDestination(coordinates)
   
  }

  const handleIsActive = () => setIsActive(!isActive);

  
  for (let i=1; i <= 8; i++) {
    for (let x in files) {
      boardList.unshift(<Square whitePiecesState={whitePiecesState} 
                                blackPiecesState={blackPiecesState} 
                                className='square' 
                                value={`${files[x]}${i}`} 
                                rank={i} 
                                file={files[x]} 
                                key={`${files[x]}${i}`}
                                handleWhitePieces={handleWhitePieces}
                                handleBlackPieces={handleBlackPieces}
                                originSquare={originSquare}
                                handleOriginSquare={handleOriginSquare}
                                activePiece={activePiece}
                                handleActivePiece={handleActivePiece}
                                destination={destination}
                                handleDestination={handleDestination}
                                isActive={isActive}
                                handleIsActive={handleIsActive}
                                turn={turn}
                                handleTurn={handleTurn}
                                />
      )
    }
  }  


  return (
    <div id='chessBoard'>
 <div id='squareContain'>{boardList}</div>
 </div>
  );
}