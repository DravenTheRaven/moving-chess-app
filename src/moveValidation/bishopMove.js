export default function bishopMove(value, i, legalMoves, key) {
  let startFile = value.toString()[0]
  let endFile = i.toString()[0]
  let startRank = value.toString()[1]
  let endRank = i.toString()[1]
  let rise = endRank - startRank
  let run = endFile - startFile
  let slope = rise / run
  if (Math.abs(slope) === 1) {
    
    legalMoves.push([key, i] )

  }

 
}