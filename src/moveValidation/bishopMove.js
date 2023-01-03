export default function bishopMove(value, i, legalMoves, key) {
  if (Math.abs(value-i ) % 11 === Math.abs(0) || Math.abs(value-i ) % 9 === Math.abs(0)) {
    console.log('legal')
    legalMoves.push([key, i] )
  }
}