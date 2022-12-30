import React from 'react';
import './App.css';
import ChessBoard from './chessBoard/ChessBoard';
import { useState } from 'react';

function App() {
  const [turnNumber, setTurnNumber] = useState(1);
  const [toMove, setToMove] = useState('White')
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
    qWKnight: 'b1',
    qWBishop: 'c1',
    wWQueen: 'd1',
    wWKing: 'e1',
    kWBishop: 'f1',
    kWKnight: 'g1',
    kWRook: 'h1'
  })

  const [blackPiecesState, setBlackPieces] = useState({
    aBPawn: 'a7',
    bBPawn: 'b7',
    cBPawn: 'c7',
    dBPawn: 'd7',
    eBPawn: 'e7',
    fBPawn: 'f7', 
    gBPawn: 'g7',
    hBPawn: 'h7',
    qBRook: 'a8',
    qBKnight: 'b8',
    qBBishop: 'c8',
    bBQueen: 'd8',
    bBKing: 'e8',
    kBBishop: 'f8',
    kBKnight: 'g8',
    kBRook: 'h8'
  })

  const [turn, setTurn] = useState(true);

  function handleTurn() {
    setTurn(!turn);
    if(toMove === 'White') {
      setToMove('Black')
    } else if(toMove === 'Black') {
      setToMove('White')
      setTurnNumber(turnNumber + 1)
    }
  }
  
  function handleWhitePieces(pieceName, destination) {
    setWhitePieces({
      ...whitePiecesState,
      [pieceName]: destination
    });
  }

  function handleBlackPieces(pieceName, destination) {
    setBlackPieces({
      ...blackPiecesState,
      [pieceName]: destination
    });
  }

  return (
    <div >
      <ChessBoard whitePiecesState={whitePiecesState}
                  blackPiecesState={blackPiecesState}
                  handleBlackPieces={handleBlackPieces}
                  handleWhitePieces={handleWhitePieces}
                  turn={turn}
                  handleTurn={handleTurn}
                  toMove={toMove}
                  turnNumber={turnNumber}/>
 </div>
  );
}

export default App;
