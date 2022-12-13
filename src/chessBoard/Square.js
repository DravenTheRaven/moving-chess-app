import { blackPawn, blackKnight, blackBishop, blackRook, blackQueen, blackKing,
  whitePawn, whiteKnight, whiteBishop, whiteRook, whiteQueen, whiteKing} from 'index.js'
import { useState } from 'react';
import pawnMove from '../pawnMove';
import knightMove from '../knightMove';
import bishopMove from '../bishopMove';
export default function Square({ whitePiecesState, blackPiecesState, value, rank, file, handleWhitePieces, 
                                 handleBlackPieces, originSquare, handleOriginSquare, activePiece, handleActivePiece, destination, 
                                 handleDestination, turn, handleTurn }) {
  let coordinates = file + rank;
  let pieceImage = 0;
  let pieceName = "";
  for (let [key, value] of Object.entries(whitePiecesState)) {
    if(value === coordinates) {
      pieceName=key;
      switch(key.substring(2, 4)) {
        case 'Pa': 
          pieceImage = whitePawn;
          break;
        case 'Kn':
          pieceImage = whiteKnight;
          break;
        case 'Bi':
          pieceImage = whiteBishop;
          break;
        case 'Ro':
          pieceImage = whiteRook;
          break;
        case 'Qu':
          pieceImage = whiteQueen;
          break; 
        case 'Ki':
          pieceImage = whiteKing;
          break;
        
      }
    }
  }

  for (let [key, value] of Object.entries(blackPiecesState)) {
    if(value === coordinates) {
      pieceName=key;
      switch(key.substring(2, 4)) {
        case 'Pa': 
          pieceImage = blackPawn;
          break;
        case 'Kn':
          pieceImage = blackKnight;
          break;
        case 'Bi':
          pieceImage = blackBishop;
          break;
        case 'Ro':
          pieceImage = blackRook;
          break;
        case 'Qu':
          pieceImage = blackQueen;
          break; 
        case 'Ki':
          pieceImage = blackKing;
          break; 
      }
    }
  }



  function handlePieces() {   
    if(turn === true && (activePiece[1].match(/[W]/) )) {
    handleWhitePieces(activePiece, coordinates)
    handleTurn()  
    } else if(turn === false && (activePiece[1].match(/[B]/))) {
      handleBlackPieces(activePiece, coordinates)
      handleTurn()
    }
    handleActivePiece('')
    handleOriginSquare('')
    handleDestination('')
    
  }
  
  function handleSquare() {
    if(originSquare === "" && pieceImage !== 0) {
      handleOriginSquare(coordinates);
      handleActivePiece(pieceName);
    } else if(destination === '' && activePiece !== '') {
      switch(activePiece.substring(2, 4)) {
        case 'Pa':
          pawnMove(activePiece, coordinates, originSquare, blackPiecesState, whitePiecesState, turn, handleActivePiece, handleOriginSquare, handlePieces, handleDestination)
          break;
        case 'Kn':
          knightMove(activePiece, coordinates, originSquare, blackPiecesState, whitePiecesState, turn, handleActivePiece, handleOriginSquare, handlePieces, handleDestination)
          console.log('knight');
          break;
        case 'Bi':
          bishopMove(activePiece, coordinates, originSquare, blackPiecesState, whitePiecesState, turn, handleActivePiece, handleOriginSquare, handlePieces, handleDestination)
          console.log('bishop');
          break;
        case 'Ro':
          console.log('rook');
          break;
        case 'Qu':
          console.log('Queen');
          break;
        case 'Ki':
          console.log('King');
          break;
        
      }  
    }
  }
 



  return(
    <div className='square' onClick={handleSquare} style={{backgroundColor: originSquare === coordinates ? 'red' : 'white'}} >
      {pieceImage !== 0 &&
      <img src={pieceImage} /> }
      {pieceImage === 0 &&
      <p>{coordinates}</p>}
    </div>
  )
}