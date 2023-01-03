export default function knightMove(value, i, legalMoves, key) {
  switch(Math.abs(value - i )) {
    case 8: 
    case 12:
    case 19:
    case 21:
      console.log('legal')
      legalMoves.push([key, i] )
      break
    default:
  }
}