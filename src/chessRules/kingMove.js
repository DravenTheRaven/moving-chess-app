export default function kingMove(handleUnselect, handlePieces, originSquare, coordinates) {
  let startFile = (originSquare.charCodeAt(0) - 96)
  let endFile = (coordinates.charCodeAt(0) - 96);
  let startRank = originSquare[1];
  let endRank = coordinates[1];
  let rankDif = endRank - startRank
  let fileDif = endFile - startFile
  if((Math.abs(fileDif) === 1 || fileDif === 0) && (Math.abs(rankDif) === 1 || rankDif === 0)) {
    handlePieces()
  } else {
    handleUnselect()
  }
}