export default function pawnMove(activePiece, value, i, legalMoves, key) {
  if(activePiece.substring(1,2) === 'W') {
    if(value-i ===-1) {
      console.log('legal')
      legalMoves.push([key, i] )
    } else if (value-i ===-2&&value[1]==='2') {
      console.log('first move')
      legalMoves.push([key, i] )
    }
  } else if (activePiece.substring(1,2) === 'B') {
    if(value-i ===1) {
      console.log('legal')
      legalMoves.push([key, i] )
    } else if (value-i ===2&&value[1]==='7') {
      console.log('first move')
      legalMoves.push([key, i] )
    }
  }
}