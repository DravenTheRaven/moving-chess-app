
export default function pawnMove(activePiece, coordinates, originSquare, blackPiecesState, whitePiecesState, turn, handleActivePiece, handleOriginSquare, handlePieces, handleDestination) {
if(turn === true && (activePiece[1].match(/[W]/) )) {
  let rankChange = parseFloat(coordinates[1]) - parseFloat(originSquare[1])                   
  if(rankChange === 1) {            
    let enemeyPieces = Object.values(blackPiecesState)
    for (let x in enemeyPieces) {
      let enemyFileDifference = enemeyPieces[x].charCodeAt(0) - originSquare.charCodeAt(0)          
      let enemyRankDifference = parseFloat(enemeyPieces[x][1]) - parseFloat(originSquare[1])                   
      if(Math.abs(enemyFileDifference) === 1 && enemyRankDifference === 1 && enemeyPieces[x] === coordinates) {
        console.log('can attack')
       
        handlePieces(activePiece, coordinates)                     
      } else if(coordinates.charCodeAt(0) === originSquare.charCodeAt(0)) {
        console.log('vertical')
        handlePieces(activePiece, coordinates)                                       
      } else {
        console.log('else')
        handleActivePiece('')
        handleOriginSquare('')
        handleDestination('')
        continue
      }
    }   
  } else if(rankChange === 2 && coordinates[0] === originSquare[0]) {
    if(parseFloat(originSquare[1]) === 2) {
      console.log('first move')
      handlePieces(activePiece, coordinates)             
    }
  }
} else if(turn === false && (activePiece[1].match(/[B]/) )) {
  let rankChange = parseFloat(originSquare[1]) - parseFloat(coordinates[1])                   
  if(rankChange === 1) {            
    let enemeyPieces = Object.values(whitePiecesState)
    for (let x in enemeyPieces) {
      let enemyFileDifference = enemeyPieces[x].charCodeAt(0) - originSquare.charCodeAt(0)          
      let enemyRankDifference = parseFloat(originSquare[1]) - parseFloat(enemeyPieces[x][1])                   
      if(Math.abs(enemyFileDifference) === 1 && enemyRankDifference === 1 && enemeyPieces[x] === coordinates) {
        console.log('can attack')
        console.log(enemeyPieces[x])
        handlePieces(activePiece, coordinates)                     
      } else if(coordinates.charCodeAt(0) === originSquare.charCodeAt(0)) {
        console.log('vertical')
        handlePieces(activePiece, coordinates)                                       
      } else {
        console.log('else')
        handleActivePiece('')
        handleOriginSquare('')
        handleDestination('')
        continue
      }
    }   
  } else if(rankChange === 2 && coordinates[0] === originSquare[0]) {
    if(parseFloat(originSquare[1]) === 7) {
      console.log('first move')
      handlePieces(activePiece, coordinates)             
    }
  }
}
}