export default function knightMove(activePiece, coordinates, originSquare, blackPiecesState, whitePiecesState, turn, handleActivePiece, handleOriginSquare, handlePieces, handleDestination) {
  let rankChange = parseFloat(coordinates[1]) - parseFloat(originSquare[1])
  let fileChange = coordinates.charCodeAt(0) - originSquare.charCodeAt(0)  
  if(Math.abs(rankChange) === 1 && Math.abs(fileChange) === 2) {
    console.log('valid move')
    handlePieces(activePiece, coordinates)
  } else if(Math.abs(rankChange) === 2 && Math.abs(fileChange) === 1) {
    console.log('valid move')
    handlePieces(activePiece, coordinates)
  } else {
    console.log('else')
        handleActivePiece('')
        handleOriginSquare('')
        handleDestination('')
  }
}