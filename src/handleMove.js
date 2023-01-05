import rookMove from "./moveValidation/rookMove";
import knightMove from "./moveValidation/knightMove";
import pawnMove from "./moveValidation/pawnMove";
import bishopMove from "./moveValidation/bishopMove";
import queenMove from "./moveValidation/queenMove";

export default function handleMove(activePiece, pieces) {
  let legalMoves = [];
  let pieceInTheWay = [];
 
  for (let [key, value] of Object.entries(pieces)) {
    for (let i = 0; i < 89; i++) {
      if(i % 10 !== 0 && i > 10 && i.toString()[1] !== '9') {
        switch(key.substring(2,4)) { 
          case 'Ro':
            rookMove(value, i, legalMoves, key)
            break
          case 'Bi':
            bishopMove(value, i, legalMoves, key)
            break
          case 'Qu':
            queenMove(value, i ,legalMoves, key)
            break
          case 'Kn':
            knightMove(value, i, legalMoves, key)
            break
          case 'Pa':
            pawnMove(activePiece, value, i, legalMoves, key)
            break
          default:
        }  
      }
    }
  }
 
  return legalMoves
}