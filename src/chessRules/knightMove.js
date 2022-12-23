export default function knightMove(handleUnselect, activePiece, coordinates, originSquare, handlePieces) {
  let rankChange = parseFloat(coordinates[1]) - parseFloat(originSquare[1])
  let fileChange = coordinates.charCodeAt(0) - originSquare.charCodeAt(0)  
  if(Math.abs(rankChange) === 1 && Math.abs(fileChange) === 2) {
    handlePieces(activePiece, coordinates)
  } else if(Math.abs(rankChange) === 2 && Math.abs(fileChange) === 1) {
    handlePieces(activePiece, coordinates)
  } else {
    handleUnselect()
  }
}