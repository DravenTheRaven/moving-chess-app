import { whitePawn, whiteKnight, whiteBishop, whiteRook, whiteQueen, whiteKing} from 'index.js'
import Piece from './Piece'

export default function WhitePieces({ whitePiecesState }) {

  return (
    <div>
      <Piece type={whitePawn}
             name='aWhitePawn'
             location={whitePiecesState.aWPawn}
             />
      <Piece type={whitePawn}
             name='bWhitePawn'
             location={whitePiecesState.bWPawn}
             />
      <Piece type={whitePawn}
             name='cWhitePawn'
             location={whitePiecesState.cWPawn}
             />
      <Piece type={whitePawn}
             name='dWhitePawn'
             location={whitePiecesState.dWPawn}
             />
      <Piece type={whitePawn}
             name='eWhitePawn'
             location={whitePiecesState.eWPawn}
             />
      <Piece type={whitePawn}
             name='fWhitePawn'
             location={whitePiecesState.fWPawn}
             />
      <Piece type={whitePawn}
             name='gWhitePawn'
             location={whitePiecesState.gWPawn}
             />
      <Piece type={whitePawn}
             name='hWhitePawn'
             location={whitePiecesState.hWPawn}
             />
      <Piece type={whiteKnight}
             name='qWhiteKnight'
             location={whitePiecesState.qWhiteKnight}
             />
      <Piece type={whiteKnight}
             name='kWhiteKnight'
             location={whitePiecesState.kWhiteKnight}
             />
      <Piece type={whiteBishop}
             name='qWhiteBishop'
             location={whitePiecesState.qWhiteBishop}
             />
      <Piece type={whiteBishop}
             name='kWhiteBishop'
             location={whitePiecesState.kWhiteBishop}
             />
      <Piece type={whiteRook}
             name='qWhiteRook'
             location={whitePiecesState.qWhiteRook}
             />
      <Piece type={whiteRook}
             name='kWhiteRook'
             location={whitePiecesState.kWhiteRook}
             />
      <Piece type={whiteQueen}
             name='whiteQueen'
             location={whitePiecesState.whiteQueen}
             />
      <Piece type={whiteKing}
             name='whiteKing'
             location={whitePiecesState.whiteKing}
             />
    </div>
  )
}
