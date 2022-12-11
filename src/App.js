import logo from './logo.svg';
import React from 'react'
import './App.css';
import ChessBoard from './chessBoard/ChessBoard';
import blackpawn from 'chessPieces/piecePics/black-pawn.png'
import WhitePieces from './chessPieces/WhitePieces';
import { useState } from 'react'
import BlackPieces from './chessPieces/BlackPieces';

function App() {
  const [whitePiecesState, setWhitePieces] = useState({
    aWPawn: 'a2',
    bWPawn: 'b2',
    cWPawn: 'c2',
    dWPawn: 'd2',
    eWPawn: 'e2',
    fWPawn: 'f2', 
    gWPawn: 'g2',
    hWPawn: 'h2',
    qWRook: 'a1',
    qWKinght: 'b1',
    qWBishop: 'c1',
    wQueen: 'd1',
    wKing: 'e1',
    kWBishop: 'f1',
    kWKnight: 'g1',
    kWRook: 'h1'
  })

  const [blackPiecesState, setBlackPieces] = useState({
    aWPawn: 'a7',
    bWPawn: 'b7',
    cWPawn: 'c7',
    dWPawn: 'd7',
    eWPawn: 'e7',
    fWPawn: 'f7', 
    gWPawn: 'g7',
    hWPawn: 'h7',
    qWRook: 'a8',
    qWKinght: 'b8',
    qWBishop: 'c8',
    wQueen: 'd8',
    wKing: 'e8',
    kWBishop: 'f8',
    kWKnight: 'g8',
    kWRook: 'h8'
  })

  return (
    <div >
      <ChessBoard />
<img src={blackpawn}/>
<WhitePieces whitePiecesState={whitePiecesState}/>
<BlackPieces blackPiecesState={blackPiecesState}/>
 </div>
  );
}

export default App;
