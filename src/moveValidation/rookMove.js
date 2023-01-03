export default function rookMove(value, i, legalMoves, key) {
  if (Math.abs(value-i ) % 10 === Math.abs(0)) {
    console.log('legal')      
    legalMoves.push([key, i] )
  } else if (Math.abs(value-i ) < 9) {
    console.log('legal')
    legalMoves.push([key, i] )
  }
}