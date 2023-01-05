import React from 'react'
import { useState } from 'react'
import Board from './gameWidgets/Board.js'
import MoveList from './gameWidgets/MoveList.js';
import ToMove from './gameWidgets/ToMove.js';
import CapturedPieces from './gameWidgets/CapturedPieces.js';
import './App.css';


function App() {
  const [turnNumber, setTurnNumber] = useState(1);
  const [toMove, setToMove] = useState('White')
  const [turn, setTurn] = useState(true);
  const [pieces, setPieces] = useState({
    wWKing: '51',
    wWQueen: '41',
    qWRook: '11',
    kWRook: '81',
    qWBishop: '31',
    kWBishop: '61',
    qWKnight: '21',
    kWKnight: '71',
    aWPawn: '12',
    bWPawn: '22',
    cWPawn: '32',
    dWPawn: '42',
    eWPawn: '52',
    fWPawn: '62', 
    gWPawn: '72',
    hWPawn: '82',
    bBKing: '58',
    bBQueen: '48',
    qBRook: '18',
    kBRook: '88',
    qBBishop: '38',
    kBBishop: '68',
    qBKnight: '28',
    kBKnight: '78',
    aBPawn: '17',
    bBPawn: '27',
    cBPawn: '37',
    dBPawn: '47',
    eBPawn: '57',
    fBPawn: '67', 
    gBPawn: '77',
    hBPawn: '87',
  })

  function handlePieces(pieceName, coordinates) {
    setPieces({
      ...pieces,
      [pieceName]: coordinates
    });
  }

  function handleTurn() {
    setTurn(!turn);
    if(toMove === 'White') {
      setToMove('Black')
    } else if(toMove === 'Black') {
      setToMove('White')
      setTurnNumber(turnNumber + 1)
    }
    console.log(turn)
  }
  
 return(
  <>
  <Board pieces={pieces}
         handlePieces={handlePieces}
         handleTurn={handleTurn}/>
  <MoveList />
  <ToMove toMove={toMove}/>
  <CapturedPieces />
  </>
 )
}

export default App;
