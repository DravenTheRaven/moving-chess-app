import { blackPawn, blackKnight, blackBishop, blackRook, blackQueen, blackKing,
  whitePawn, whiteKnight, whiteBishop, whiteRook, whiteQueen, whiteKing} from 'index.js'

export function piecePic(whitePiecesState, blackPiecesState, coordinates, pieceImage) {
  for (let [key, value] of Object.entries(whitePiecesState)) {
    if(value === coordinates) {
      switch(key) {
        case 'bWPawn': 
        case 'aWPawn': pieceImage = whitePawn
      }
    }
  }
}