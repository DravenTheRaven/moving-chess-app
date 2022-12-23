import rookMove from "./rookMove";
import pawnMove from "./pawnMove";
import knightMove from "./knightMove";
import kingMove from "./kingMove";
import bishopMove from "./bishopMove";

export default function handleMove(handleUnselect, activePiece, coordinates, originSquare, blackPiecesState, whitePiecesState, turn, handlePieces, handleBlackPieces, handleWhitePieces) {
  
  function queenMove() {
    bishopMove(handleUnselect, activePiece, coordinates, originSquare, blackPiecesState, whitePiecesState, handlePieces)
    rookMove(handleUnselect, activePiece, coordinates, originSquare, blackPiecesState, whitePiecesState, handlePieces)
  }

  switch(activePiece.substring(2, 4)) {
    case 'Pa':
      pawnMove(handleUnselect, activePiece, coordinates, originSquare, blackPiecesState, whitePiecesState, turn, handlePieces, handleBlackPieces, handleWhitePieces)
      break;
    case 'Kn':
      knightMove(handleUnselect, activePiece, coordinates, originSquare, handlePieces)
      break;
    case 'Bi':
      bishopMove(handleUnselect, activePiece, coordinates, originSquare, blackPiecesState, whitePiecesState, handlePieces)
      break;
    case 'Ro':
      rookMove(handleUnselect, activePiece, coordinates, originSquare, blackPiecesState, whitePiecesState, handlePieces)
      break;
    case 'Qu':
      queenMove()
      break;
    case 'Ki':
      kingMove(handleUnselect, handlePieces, originSquare, coordinates)
      break;
    default:
      console.log('this will probably be the promotion piece')
  }  
  handleUnselect()
}

