import React from 'react';
import Square from 'chessBoard/Square.js'
import { whitePawn, whiteKnight, whiteBishop, whiteRook, whiteQueen, whiteKing} from 'index.js'


export default function ChessBoard() {
  let board = [];
  let boardList = [];
  let files = ['h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];
  for (let i=1; i <= 8; i++) {
    for (let x in files) {
      boardList.unshift(<Square className='square' rank={i} file={files[x]} key={`${files[x]}${i}`} />)
    }
  }  
  for (let key of Object.entries(boardList)) {
  
  }
  console.log(Object.values(boardList))
  return (
    <div id='chessBoard'>
 <div id='squareContain'>{boardList}</div>
 </div>
  );
}