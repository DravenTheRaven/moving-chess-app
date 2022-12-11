import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import blackPawn from 'chessPieces/piecePics/black-pawn.png'
import blackKnight from 'chessPieces/piecePics/black-knight.png'
import blackBishop from 'chessPieces/piecePics/black-bishop.png'
import blackRook from 'chessPieces/piecePics/black-rook.png'
import blackQueen from 'chessPieces/piecePics/black-queen.png'
import blackKing from 'chessPieces/piecePics/black-king.png'
import whitePawn from 'chessPieces/piecePics/white-pawn.png'
import whiteKnight from 'chessPieces/piecePics/white-knight.png'
import whiteBishop from 'chessPieces/piecePics/white-bishop.png'
import whiteRook from 'chessPieces/piecePics/white-rook.png'
import whiteQueen from 'chessPieces/piecePics/white-queen.png'
import whiteKing from 'chessPieces/piecePics/white-king.png'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export { blackPawn, blackKnight, blackBishop, blackRook, blackQueen, blackKing,
         whitePawn, whiteKnight, whiteBishop, whiteRook, whiteQueen, whiteKing}
