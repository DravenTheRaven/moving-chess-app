import { capture, checkPieceInTheWay, handlePieceInTheWay } from "../utils";

export default function pawnMove(handleUnselect, activePiece, coordinates, originSquare, blackPiecesState, whitePiecesState, turn, handlePieces, handleBlackPieces, handleWhitePieces) {
  let pieceCoordinates = Object.values(blackPiecesState).concat(...Object.values(whitePiecesState));
  let pieceInTheWay = [];
  let fileDif = (coordinates.charCodeAt(0) - originSquare.charCodeAt(0))
  
  if(turn === true && (activePiece[1].match(/[W]/) )) {
  if(originSquare[0]===coordinates[0] && (parseFloat(originSquare[1]) + 1) === parseFloat(coordinates[1])) {
    console.log(originSquare)
    for(let x of Object.values(pieceCoordinates)) {
      if (x === coordinates) {
        pieceInTheWay.push(x)
      } 
    } 
    handlePieceInTheWay(pieceInTheWay, handleUnselect, handlePieces, activePiece, coordinates)
  } else if (originSquare[0]===coordinates[0] && (parseFloat(originSquare[1]) + 2) === parseFloat(coordinates[1]) && parseFloat(originSquare[1])===2) {
    for(let x of Object.values(pieceCoordinates)) {
      if (x === coordinates) {
        pieceInTheWay.push(x)
      } else if (x === coordinates[0] + parseFloat(coordinates[1] - 1)) {
        pieceInTheWay.push(x)
      }
    }
    handlePieceInTheWay(pieceInTheWay, handleUnselect, handlePieces, activePiece, coordinates)
  } else if (Math.abs(fileDif) === 1 && parseFloat(originSquare[1]) + 1 === parseFloat(coordinates[1])) {
    for(let x of Object.values(blackPiecesState)) {
      if (x === coordinates) {
        pieceInTheWay.push(x)
      }
    }
    if (pieceInTheWay.length > 0) {
      handlePieces(activePiece, coordinates)
    } else {
      handleUnselect()
    }
  }
  } else if(turn === false && (activePiece[1].match(/[B]/) )) {
    console.log(`coords ${coordinates} origin ${originSquare}`)
    if(originSquare[0]===coordinates[0] && (parseFloat(originSquare[1]) - 1) === parseFloat(coordinates[1])) {
      for(let x of Object.values(pieceCoordinates)) {
        if (x === coordinates) {  
          pieceInTheWay.push(x)
        } 
      }
      handlePieceInTheWay(pieceInTheWay, handleUnselect, handlePieces, activePiece, coordinates)
    } else if (originSquare[0]===coordinates[0] && (parseFloat(originSquare[1]) - 2) === parseFloat(coordinates[1]) && parseFloat(originSquare[1])===7) {
      for(let x of Object.values(pieceCoordinates)) {
        if (x === coordinates) {
          pieceInTheWay.push(x)
        } else if (x === coordinates[0] + (parseFloat(originSquare[1] - 1))) {
          pieceInTheWay.push(x)
        }
      }
      console.log(pieceInTheWay)
      handlePieceInTheWay(pieceInTheWay, handleUnselect, handlePieces, activePiece, coordinates)    
    } else if (Math.abs(fileDif) === 1 && parseFloat(originSquare[1]) - 1 === parseFloat(coordinates[1])) {
      for(let x of Object.values(whitePiecesState)) {
        if (x === coordinates) {
          pieceInTheWay.push(x)
        }
      }
      if (pieceInTheWay.length > 0) {
        handlePieces(activePiece, coordinates)
      } else {
        handleUnselect()
      }
    }
  }
}