export default function rookMove(value, i, legalMoves, key) {
 
  if (Math.abs(value-i ) % 10 === Math.abs(0) || i.toString()[0] === value[0]) {    
    legalMoves.push([key, i] )
  } 
}