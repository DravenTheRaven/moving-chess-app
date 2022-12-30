import handleMove from "../chessRules/handleMove";
import checkLegalMoves from "../checkLegalMoves";
export default function Square({ whitePiecesState, blackPiecesState, value, rank, file, handleWhitePieces, 
                                 handleBlackPieces, originSquare, handleOriginSquare, activePiece, handleActivePiece, destination, 
                                 handleDestination, turn, handleTurn, handleUnselect, moveList, handleMoveList, toMove, turnNumber, handlePositionList }) {
  let coordinates = file + rank;
  let pieceImage = 0;
  let pieceName = "";
  for (let [key, value] of Object.entries(whitePiecesState)) {
    if(value === coordinates) {
      pieceName=key;
      switch(key.substring(2, 4)) {
        case 'Pa': 
          pieceImage = String.fromCharCode(9817);
          break;
        case 'Kn':
          pieceImage = String.fromCharCode(9816);
          break;
        case 'Bi':
          pieceImage = String.fromCharCode(9815);
          break;
        case 'Ro':
          pieceImage = String.fromCharCode(9814);
          break;
        case 'Qu':
          pieceImage = String.fromCharCode(9813);
          break; 
        case 'Ki':
          pieceImage = String.fromCharCode(9812);
          break;
          default:
      }
    }
  }

  for (let [key, value] of Object.entries(blackPiecesState)) {
    if(value === coordinates) {
      pieceName=key;
      switch(key.substring(2, 4)) {
        case 'Pa': 
          pieceImage = String.fromCharCode(9823);
          break;
        case 'Kn':
          pieceImage = String.fromCharCode(9822);
          break;
        case 'Bi':
          pieceImage = String.fromCharCode(9821);
          break;
        case 'Ro':
          pieceImage = String.fromCharCode(9820);
          break;
        case 'Qu':
          pieceImage = String.fromCharCode(9819);
          break; 
        case 'Ki':
          pieceImage = String.fromCharCode(9818);
          break; 
          default:
      }
    }
  }

  function handlePieces() { 
    if(turn === true && (activePiece[1].match(/[W]/) )) {
      handleWhitePieces(activePiece, coordinates)
      handleMoveList(activePiece, coordinates, toMove, turnNumber)
      handlePositionList(blackPiecesState, whitePiecesState)
      handleTurn()  
    } else if(turn === false && (activePiece[1].match(/[B]/))) {
      handleBlackPieces(activePiece, coordinates)
      handleMoveList(activePiece, coordinates, toMove, turnNumber)
      handlePositionList(blackPiecesState, whitePiecesState)
      handleTurn()
    }
    handleUnselect()    
  }
  
  function handleSquare() {
    if(originSquare === "" && pieceImage !== 0) {
      handleOriginSquare(coordinates);
      handleActivePiece(pieceName);
      checkLegalMoves(pieceName, coordinates, blackPiecesState, whitePiecesState)
      console.log(pieceName)
      
    } else if(destination === '' && activePiece !== '') {
      handleMove(handleUnselect, activePiece, coordinates, originSquare, blackPiecesState, whitePiecesState, turn, handlePieces, handleBlackPieces, handleWhitePieces)
    }
  }
 
  return(
    <div className='square' 
         onClick={handleSquare} 
         style= {{backgroundColor: originSquare 
          === coordinates ? 'red' : 'white'}} 
         >
      {pieceImage !== 0 &&
        <div className='pieceImage'>{pieceImage} </div> 
      }
      {pieceImage === 0 &&
      <p>{coordinates}</p>
      }
    </div>
  )
}