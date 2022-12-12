import { whitePawn, whiteKnight, whiteBishop, whiteRook, whiteQueen, whiteKing} from 'index.js'
import Piece from './Piece'

export default function WhitePieces({ whitePiecesState }) {

  return (
    <div>
      <Piece type={whitePawn}
             name='aWhitePawn'
             location={whitePiecesState.aWPawn}
             value={whitePiecesState.aWPawn}
             />
      <Piece type={whitePawn}
             name='bWhitePawn'
             location={whitePiecesState.bWPawn}
             value={whitePiecesState.bWPawn}
             />
      <Piece type={whitePawn}
             name='cWhitePawn'
             location={whitePiecesState.cWPawn}
             value={whitePiecesState.cWPawn}
             />
      <Piece type={whitePawn}
             name='dWhitePawn'
             location={whitePiecesState.dWPawn}
             value={whitePiecesState.dWPawn}
             />
      <Piece type={whitePawn}
             name='eWhitePawn'
             location={whitePiecesState.eWPawn}
             value={whitePiecesState.eWPawn}
             />
      <Piece type={whitePawn}
             name='fWhitePawn'
             location={whitePiecesState.fWPawn}
             value={whitePiecesState.fWPawn}
             />
      <Piece type={whitePawn}
             name='gWhitePawn'
             location={whitePiecesState.gWPawn}
             value={whitePiecesState.gWPawn}
             />
      <Piece type={whitePawn}
             name='hWhitePawn'
             location={whitePiecesState.hWPawn}
             value={whitePiecesState.hWPawn}
             />
      <Piece type={whiteKnight}
             name='qWhiteKnight'
             location={whitePiecesState.qWhiteKnight}
             value={whitePiecesState.qWhiteKnight}
             />
      <Piece type={whiteKnight}
             name='kWhiteKnight'
             location={whitePiecesState.kWhiteKnight}
             value={whitePiecesState.kWhiteKnight}
             />
      <Piece type={whiteBishop}
             name='qWhiteBishop'
             location={whitePiecesState.qWhiteBishop}
             value={whitePiecesState.qWhiteBishop}
             />
      <Piece type={whiteBishop}
             name='kWhiteBishop'
             location={whitePiecesState.kWhiteBishop}
             value={whitePiecesState.kWhiteBishop}
             />
      <Piece type={whiteRook}
             name='qWhiteRook'
             location={whitePiecesState.qWhiteRook}
             value={whitePiecesState.qWhiteRook}
             />
      <Piece type={whiteRook}
             name='kWhiteRook'
             location={whitePiecesState.kWhiteRook}
             value={whitePiecesState.kWhiteRook}
             />
      <Piece type={whiteQueen}
             name='whiteQueen'
             location={whitePiecesState.whiteQueen}
             value={whitePiecesState.whiteQueen}
             />
      <Piece type={whiteKing}
             name='whiteKing'
             location={whitePiecesState.whiteKing}
             value={whitePiecesState.whiteKing}
             />
    </div>
  )
}
