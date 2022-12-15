import { checkPieceInTheWay, handlePieceInTheWay } from "./utils";

export default function rookMove(handleUnselect, activePiece, coordinates, originSquare, blackPiecesState, whitePiecesState, turn, handleActivePiece, handleOriginSquare, handlePieces, handleDestination) {
  console.log('rook function')
  let startFile = (originSquare.charCodeAt(0) - 96);
  let endFile = (coordinates.charCodeAt(0) - 96);
  let startRank = originSquare[1];
  let endRank = coordinates[1];
  let pieceCoordinates = Object.values(blackPiecesState).concat(...Object.values(whitePiecesState));
  console.log(pieceCoordinates)
  if (coordinates[0] === originSquare[0]) {
    let pieceInTheWay = [];
    let testRank = parseFloat(startRank) + 1;
    for (testRank; testRank < endRank; testRank++) {
      for(let x = 0; x <= 31; x++) {
        if (coordinates[0]+testRank===pieceCoordinates[x]){
          pieceInTheWay.push(pieceCoordinates[x]);
        }
      }
    }
    console.log(pieceInTheWay)
    handlePieceInTheWay(pieceInTheWay, handleUnselect, handlePieces, activePiece, coordinates)
  } else if (coordinates[1] === originSquare[1]) {
    console.log(coordinates);
    let pieceInTheWay = [];
    let testFile = parseFloat(startFile) + 1;
    let testRank = parseFloat(startRank) + 1;
      for (testFile; testFile < endFile; testFile++) {
        for(let x = 0; x <= 31; x++) {
          if (coordinates[0]+testRank===pieceCoordinates[x]){
            pieceInTheWay.push(pieceCoordinates[x]);
          }
        }
      }
      handlePieceInTheWay(pieceInTheWay, handleUnselect, handlePieces, activePiece, coordinates)
  }
}

