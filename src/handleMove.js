export default function handleMove(activePiece, originSquare, destination, pieces) {
  let legalMoves = [];
  let pieceInTheWay = [];
  function checkPieceInTheWay(activePiece, originSquare, destination, pieces) {
  for (let [key, value] of Object.entries(pieces)) {
    if(value === destination) {
      console.log(key)
    }
  }
}
  console.log(originSquare)
  switch(activePiece.substring(2,4)) { 
    case 'Ro':
      console.log(Math.abs(originSquare-destination))
      if (Math.abs(originSquare-destination) % 10 === Math.abs(0)) {
        console.log('legal')
        
        legalMoves.push(destination)
      } else if (Math.abs(originSquare-destination) < 10) {
        console.log('legal')
        legalMoves.push(destination)
      }
      break
    case 'Bi':
      if (Math.abs(originSquare-destination) % 11 === Math.abs(0) || Math.abs(originSquare-destination) % 9 === Math.abs(0)) {
        console.log('legal')
        legalMoves.push(destination)
      }
      break
    case 'Qu':
      if (Math.abs(originSquare-destination) % 11 === Math.abs(0) || Math.abs(originSquare-destination) % 9 === Math.abs(0)) {
        console.log('legal')
        legalMoves.push(destination)
      } else if (Math.abs(originSquare-destination) % 10 === Math.abs(0)) {
        console.log('legal')
        legalMoves.push(destination)
      } else if (Math.abs(originSquare-destination) < 10) {
        console.log('legal')
        legalMoves.push(destination)
      }
      break
    case 'Kn':
      switch(Math.abs(originSquare - destination)) {
        case 8: 
        case 12:
        case 19:
        case 21:
          console.log('legal')
          legalMoves.push(destination)
          break
        default:
      }
      break
    case 'Pa':
      if(activePiece.substring(1,2) === 'W') {
        if(originSquare-destination===-1) {
          console.log('legal')
          legalMoves.push(destination)
        } else if (originSquare-destination===-2&&originSquare[1]==='2') {
          console.log('first move')
          legalMoves.push(destination)
        }
      } else if (activePiece.substring(1,2) === 'B') {
        if(originSquare-destination===1) {
          console.log('legal')
          legalMoves.push(destination)
        } else if (originSquare-destination===2&&originSquare[1]==='7') {
          console.log('first move')
          legalMoves.push(destination)
        }
      }
      break
    default:
      
  }
  console.log(destination)
}