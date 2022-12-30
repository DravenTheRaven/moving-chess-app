import React from 'react';
import { capture } from '../utils.js';
import Square from './Square.js'
import checkLegalMoves from '../checkLegalMoves.js';
import { useState } from 'react';

export default function ChessBoard({ whitePiecesState, blackPiecesState, handleWhitePieces, handleBlackPieces, turn, handleTurn, toMove, turnNumber }) {
  const [originSquare, setOriginSquare] = useState('');
  const [activePiece, setActivePiece] = useState('');
  const [destination, setDestination] = useState('');
  const [moveList, setMoveList] = useState([]);
  const [positionList, setPositionList] = useState([])
  let boardList = [];
  let files = ['h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];

  function handleMoveList(activePiece, coordinates, toMove, turnNumber) {
    let notation = ''
    let captureCheck = capture(activePiece, coordinates, originSquare, blackPiecesState, whitePiecesState, handleBlackPieces, handleWhitePieces)
    if(activePiece.substring(2, 4) === 'Kn') {
      notation = 'N'
      switch(captureCheck) {
        case true:
          notation = 'Nx'
          break
        default:
          notation = 'N'
      }
    } else if (activePiece[2] === 'P') {
      switch(captureCheck) {
        case true:
          notation = originSquare[0] + 'x'
          break
        default:
          notation = ''
      }
    } else {
      notation = activePiece[2]
      switch(captureCheck) {
        case true:
          notation = activePiece[2] + 'x'
          break
        default:
          notation = activePiece[2]
          break
      }
    }
    if(toMove === 'White') {
      setMoveList(
        [
          ...moveList, ` ${turnNumber}. ${notation}${coordinates}`
        ]
      )
    } else {
      setMoveList(
        [
          ...moveList, ` ${notation}${coordinates}`
        ]
      )
    }
  }

  function handlePositionList(blackPiecesState, whitePiecesState) {
    
    setPositionList([
      ...positionList, [toMove, turnNumber], [Object.entries(blackPiecesState).concat(Object.entries(whitePiecesState))]
    ]) 
  }

  function handleOriginSquare(coordinates) {
    setOriginSquare(coordinates)  
  }
  
  function handleActivePiece(pieceName, coordinates, blackPiecesState, whitePiecesState) {
    setActivePiece(pieceName)
    
  }
  
  function handleDestination(coordinates) {
    setDestination(coordinates) 
  }

  function handleUnselect() {
    handleActivePiece('')
    handleOriginSquare('')
    handleDestination('')
  }

  for (let i=1; i <= 8; i++) {
    for (let x in files) {
      boardList.unshift(
          <Square whitePiecesState={whitePiecesState} 
                  blackPiecesState={blackPiecesState} 
                  className='square' 
                  value={`${files[x]}${i}`} 
                  rank={i} 
                  file={files[x]} 
                  key={`${files[x]}${i}`} 
                  handleUnselect={handleUnselect}
                  handleWhitePieces={handleWhitePieces} 
                  handleBlackPieces={handleBlackPieces}
                  originSquare={originSquare} 
                  handleOriginSquare={handleOriginSquare} 
                  activePiece={activePiece} 
                  handleActivePiece={handleActivePiece} 
                  destination={destination} 
                  handleDestination={handleDestination}   
                  turn={turn} 
                  handleTurn={handleTurn}
                  moveList={moveList}
                  handleMoveList={handleMoveList}
                  toMove={toMove}
                  turnNumber={turnNumber}
                  handlePositionList={handlePositionList}
                  />)
    }
  }  

  return (
    <>
      <div id='chessBoard'>
        <div id='squareContain'>{boardList}</div>
      </div>
      <div id='moveList'>MoveList{moveList}</div>
      <div id='toMove'>{`${toMove} to move`}</div>
      <div id='positions'></div>
    </>
  );
}