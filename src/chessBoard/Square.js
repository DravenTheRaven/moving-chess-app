import { blackPawn, blackKnight, blackBishop, blackRook, blackQueen, blackKing,
  whitePawn, whiteKnight, whiteBishop, whiteRook, whiteQueen, whiteKing} from 'index.js'
import { useState } from 'react';

export default function Square({ whitePiecesState, blackPiecesState, value, rank, file, handleWhitePieces, 
                                 handleBlackPieces, originSquare, handleOriginSquare, activePiece, handleActivePiece, destination, 
                                 handleDestination, isActive, handleIsActive, turn, handleTurn }) {
  let coordinates = file + rank;
  let pieceImage = 0;
  let pieceName = "";
  for (let [key, value] of Object.entries(whitePiecesState)) {
    if(value === coordinates) {
      pieceName=key;
      switch(key) {
        case 'aWPawn':
        case 'bWPawn':
        case 'cWPawn':
        case 'dWPawn':
        case 'eWPawn':
        case 'fWPawn':
        case 'gWPawn':   
        case 'hWPawn': 
          pieceImage = whitePawn;
          break;
        case 'qWKnight':
        case 'kWKnight':
          pieceImage = whiteKnight;
          break;
        case 'qWBishop':
        case 'kWBishop':
          pieceImage = whiteBishop;
          break;
        case 'qWRook':
        case 'kWRook':
          pieceImage = whiteRook;
          break;
        case 'wWQueen':
          pieceImage = whiteQueen;
          break; 
        case 'wWKing':
          pieceImage = whiteKing;
          break; 
      }
    }
  }

  for (let [key, value] of Object.entries(blackPiecesState)) {
    if(value === coordinates) {
      pieceName=key;
      switch(key) {
        case 'aBPawn':
        case 'bBPawn':
        case 'cBPawn':
        case 'dBPawn':
        case 'eBPawn':
        case 'fBPawn':
        case 'gBPawn':   
        case 'hBPawn': 
          pieceImage = blackPawn;
          break;
        case 'qBKnight':
        case 'kBKnight':
          pieceImage = blackKnight;
          break;
        case 'qBBishop':
        case 'kBBishop':
          pieceImage = blackBishop;
          break;
        case 'qBRook':
        case 'kBRook':
          pieceImage = blackRook;
          break;
        case 'bBQueen':
          pieceImage = blackQueen;
          break; 
        case 'bBKing':
          pieceImage = blackKing;
          break; 
      }
    }
  }

  function handleMove() {
    switch(activePiece[2]) {
      case 'P':
        console.log(`pawn origin ${originSquare}`);
        console.log(`pawn desination ${coordinates}`);
        if(originSquare[0] != coordinates[0] ) {
          console.log('illegal')
          
        } else if (originSquare[0] === coordinates[0]) {
          console.log('legal')
        }
        break;
      case 'K':
        console.log('knight');
        break;
      case 'B':
        console.log('bishop');
        break;
      case 'R':
        console.log('rook');
        break;
      case 'Q':
        console.log('Queen');
        break;
      case 'K':
        console.log('King');
        break;
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
  }
  


function handleSquare() {
  if(originSquare === "" && pieceImage != 0) {
    
    handleOriginSquare(coordinates);
    handleActivePiece(pieceName)
 
  } else if (originSquare != "" && (activePiece[1].match(/[W]/) )) {

    handleDestination(coordinates)
    handleMove() 
    handlePieces()
    handleActivePiece("")
    handleOriginSquare("")
  } else if (originSquare != "" && (activePiece[1].match(/[B]/)) ) {
    handleDestination(coordinates)
    handleMove()
    handlePieces()
    handleActivePiece("")
    handleOriginSquare("")
  }
   
  
}

  return(
    <div className='square' onClick={handleSquare} style={{backgroundColor: originSquare === coordinates ? 'red' : 'white'}} >
      {pieceImage != 0 &&
      <img src={pieceImage} />
}
{pieceImage===0 &&
      <p>{coordinates}</p>
}
    </div>
  )
}