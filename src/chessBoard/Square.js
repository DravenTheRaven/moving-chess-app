
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
          pieceImage = String.fromCharCode(9817);
          break;
        case 'Kn':
          pieceImage = String.fromCharCode(9816);
          break;
        case 'Bi':
          pieceImage = String.fromCharCode(9815);
          break;
        case 'Ro':
          pieceImage = String.fromCharCode(9814);
          break;
        case 'Qu':
          pieceImage = String.fromCharCode(9813);
          break; 
        case 'Ki':
          pieceImage = String.fromCharCode(9812);
          break;
        
      }
    }
  }

  for (let [key, value] of Object.entries(blackPiecesState)) {
    if(value === coordinates) {
      pieceName=key;
      switch(key.substring(2, 4)) {
        case 'Pa': 
          pieceImage = String.fromCharCode(9823);
          break;
        case 'Kn':
          pieceImage = String.fromCharCode(9822);
          break;
        case 'Bi':
          pieceImage = String.fromCharCode(9821);
          break;
        case 'Ro':
          pieceImage = String.fromCharCode(9820);
          break;
        case 'Qu':
          pieceImage = String.fromCharCode(9819);
          break; 
        case 'Ki':
          pieceImage = String.fromCharCode(9818);
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
      handleActivePiece('')
    handleOriginSquare('')
    handleDestination('')
    }
  }
 



  return(
    <div className='square' onClick={handleSquare} style={{backgroundColor: originSquare === coordinates ? 'red' : 'white'}} >
      {pieceImage !== 0 &&
      <div className='pieceImage'>{pieceImage} </div> }
      {pieceImage === 0 &&
      <p>{coordinates}</p>}
    </div>
  )
}