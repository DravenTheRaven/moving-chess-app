import { blackPawn, blackKnight, blackBishop, blackRook, blackQueen, blackKing} from 'index.js'
import Piece from './Piece'

export default function BlackPieces({ blackPiecesState }) {

  return (
    <div>
      <Piece type={blackPawn}
             name='aBlackPawn'
             location={blackPiecesState.aBPawn}
             />
      <Piece type={blackPawn}
             name='bBlackPawn'
             location={blackPiecesState.bBPawn}
             />
      <Piece type={blackPawn}
             name='cBlackPawn'
             location={blackPiecesState.cBPawn}
             />
      <Piece type={blackPawn}
             name='dBlackPawn'
             location={blackPiecesState.dBPawn}
             />
      <Piece type={blackPawn}
             name='eBlackPawn'
             location={blackPiecesState.eBPawn}
             />
      <Piece type={blackPawn}
             name='fBlackPawn'
             location={blackPiecesState.fBPawn}
             />
      <Piece type={blackPawn}
             name='gBlackPawn'
             location={blackPiecesState.gBPawn}
             />
      <Piece type={blackPawn}
             name='hBlackPawn'
             location={blackPiecesState.hBPawn}
             />
      <Piece type={blackKnight}
             name='qBlackKnight'
             location={blackPiecesState.qBlackKnight}
             />
      <Piece type={blackKnight}
             name='kBlackKnight'
             location={blackPiecesState.kBlackKnight}
             />
      <Piece type={blackBishop}
             name='qBlackBishop'
             location={blackPiecesState.qBlackBishop}
             />
      <Piece type={blackBishop}
             name='kBlackBishop'
             location={blackPiecesState.kBlackBishop}
             />
      <Piece type={blackRook}
             name='qBlackRook'
             location={blackPiecesState.qBlackRook}
             />
      <Piece type={blackRook}
             name='kBlackRook'
             location={blackPiecesState.kBlackRook}
             />
      <Piece type={blackQueen}
             name='blackQueen'
             location={blackPiecesState.blackQueen}
             />
      <Piece type={blackKing}
             name='blackKing'
             location={blackPiecesState.blackKing}
             />
    </div>
  )
}
