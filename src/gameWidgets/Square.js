import handleMove from "../handleMove";

export default function Square({ value, rank, file, coordinates, pieces, handleActivePiece, handleOriginSquare, originSquare, activePiece, destination, handleDestination, handlePieces, handleTurn }) {
  let pieceImage = 0;
  let pieceName = '';

  

  function handleSquare() {
    if(originSquare === "" && pieceImage !== 0) {
      handleActivePiece(pieceName)
      handleOriginSquare(coordinates)
      let legalMoves = handleMove(activePiece, originSquare, coordinates, pieces)
      console.log(legalMoves)
      console.log(pieceName)
    } else if ( activePiece !== ''){
      console.log(coordinates)
      
      handlePieces(activePiece, coordinates)
      handleTurn()
      handleActivePiece('')
      handleOriginSquare('')
    } else {
      handleActivePiece('')
      handleOriginSquare('')
    }
  }
  
/*if you have the coordinates be real numbers, you can add/subtract 10
to change file and 1 for rank. so moves could be described as + 11 */
  for (let [key, value] of Object.entries(pieces)) {
    if(value === coordinates) {
      pieceName=key;
      switch(key.substring(1, 4)) {
        case 'WPa': 
          pieceImage = String.fromCharCode(9817);
          break;
        case 'WKn':
          pieceImage = String.fromCharCode(9816);
          break;
        case 'WBi':
          pieceImage = String.fromCharCode(9815);
          break;
        case 'WRo':
          pieceImage = String.fromCharCode(9814);
          break;
        case 'WQu':
          pieceImage = String.fromCharCode(9813);
          break; 
        case 'WKi':
          pieceImage = String.fromCharCode(9812);
          break;
        case 'BPa': 
          pieceImage = String.fromCharCode(9823);
          break;
        case 'BKn':
          pieceImage = String.fromCharCode(9822);
          break;
        case 'BBi':
          pieceImage = String.fromCharCode(9821);
          break;
        case 'BRo':
          pieceImage = String.fromCharCode(9820);
          break;
        case 'BQu':
          pieceImage = String.fromCharCode(9819);
          break; 
        case 'BKi':
          pieceImage = String.fromCharCode(9818);
          break;
          default:    
      }  
    } 
  }
  return(
    <div className='square' onClick={handleSquare} style= {{backgroundColor: originSquare 
      === coordinates ? 'red' : 'white'}} >
      { pieceImage !== 0 &&
        <div className='pieceImage'>{pieceImage} </div>
      }
      { pieceImage === 0 &&
        <div><p>{coordinates}</p></div>
      }
    </div>
  )
}