function checkPieceInTheWay (pieceInTheWay, pieceCoordinates, testFile, testRank) {
  for(let x = 0; x <= 31; x++) {   
    if ((String.fromCharCode(testFile+96)+testRank)=== pieceCoordinates[x]) {
      pieceInTheWay.push(pieceCoordinates[x])
      console.log(`${pieceCoordinates[x]} in the way`)
    }   
  }    
}

function handlePieceInTheWay(pieceInTheWay, handleUnselect, handlePieces, activePiece, coordinates) {
  if (pieceInTheWay.length > 0) {
    handleUnselect()
  } else {
    handlePieces(activePiece, coordinates)
  }
  console.log(pieceInTheWay)
}

  export { checkPieceInTheWay, handlePieceInTheWay }