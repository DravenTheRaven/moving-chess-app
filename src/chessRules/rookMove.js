import { checkPieceInTheWay, handlePieceInTheWay } from "../utils";

export default function rookMove(handleUnselect, activePiece, coordinates, originSquare, blackPiecesState, whitePiecesState, handlePieces) {
  let startFile = (originSquare.charCodeAt(0) - 96);
  let endFile = (coordinates.charCodeAt(0) - 96);
  let startRank = originSquare[1];
  let endRank = coordinates[1];
  let pieceCoordinates = Object.values(blackPiecesState).concat(...Object.values(whitePiecesState));
  console.log(pieceCoordinates)
  if (coordinates[0] === originSquare[0]) {
    if (coordinates[1] > originSquare[1]) {
      let pieceInTheWay = [];
      let testRank = parseFloat(startRank) + 1;
      for (testRank; testRank < endRank; testRank++) {
        for(let x = 0; x <= 31; x++) {
          if (coordinates[0]+testRank===pieceCoordinates[x]){
            pieceInTheWay.push(pieceCoordinates[x]);
          }
        }
      }
      handlePieceInTheWay(pieceInTheWay, handleUnselect, handlePieces, activePiece, coordinates)
    } else if(coordinates[1] < originSquare[1]) {
      let pieceInTheWay = [];
      let testRank = parseFloat(startRank) -1;
      for (testRank; testRank > endRank; testRank--) {
        for(let x = 0; x <= 31; x++) {
          if (coordinates[0]+testRank===pieceCoordinates[x]){
            pieceInTheWay.push(pieceCoordinates[x]);
          }
        }
      }
      handlePieceInTheWay(pieceInTheWay, handleUnselect, handlePieces, activePiece, coordinates)
    }
  } else if (coordinates[1] === originSquare[1]) {
    if (startFile < endFile) {
      let pieceInTheWay = [];
      let testFile = parseFloat(startFile) + 1;
      let testRank = parseFloat(startRank) + 1;
      for (testFile; testFile < endFile; testFile++) {
        for(let x = 0; x <= 31; x++) {
          if (String.fromCharCode(parseFloat(testFile)+96) + coordinates[1] === pieceCoordinates[x]) {
            pieceInTheWay.push(pieceCoordinates[x]);
          }
        }
      }
      handlePieceInTheWay(pieceInTheWay, handleUnselect, handlePieces, activePiece, coordinates)
    } else if (startFile > endFile) {
      let pieceInTheWay = [];
      let testFile = parseFloat(startFile) - 1;
      let testRank = parseFloat(startRank) + 1;
      for (testFile; testFile > endFile; testFile--) {
        for(let x = 0; x <= 31; x++) {
          if (String.fromCharCode(parseFloat(testFile)+96) + coordinates[1] === pieceCoordinates[x]) {
            pieceInTheWay.push(pieceCoordinates[x]);
          }
        }
      }
      handlePieceInTheWay(pieceInTheWay, handleUnselect, handlePieces, activePiece, coordinates)
    }
  }
}

