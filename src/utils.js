function checkPieceInTheWay (pieceInTheWay, pieceCoordinates, testFile, testRank) {
  for(let x = 0; x <= 31; x++) {   
    if ((String.fromCharCode(testFile+96)+testRank)=== pieceCoordinates[x]) {
      pieceInTheWay.push(pieceCoordinates[x])
    }   
  }    
}

function handlePieceInTheWay(pieceInTheWay, handleUnselect, handlePieces, activePiece, coordinates) {
  if (pieceInTheWay.length > 0) {
    handleUnselect()
    return 'illegal'
  } else {
    handlePieces(activePiece, coordinates)
    return 'legal'
  }
}

function getTestRank(startRank, upDown) {
  let testRank = parseFloat(startRank) + upDown;
  return testRank
}

function getTestFile(startFile, upDown) {
  let testFile = parseFloat(startFile) + upDown
  return testFile
}

function testRankAndFile(testRank, startRank, testFile, startFile, endFile, pieceInTheWay, pieceCoordinates) {
  if (testRank > startRank && testFile > startFile) {
    for (testFile; testFile< endFile; testFile++) {
      checkPieceInTheWay (pieceInTheWay, pieceCoordinates, testFile, testRank)
      testRank++ 
    }
  } else if (testRank < startRank && testFile < startFile) {
    for(testFile; testFile > endFile; testFile--) {
      checkPieceInTheWay (pieceInTheWay, pieceCoordinates, testFile, testRank)
      testRank-- 
    }
  } else if (testRank > startRank && testFile < startFile) {
      for(testFile; testFile > endFile; testFile--) {
      checkPieceInTheWay (pieceInTheWay, pieceCoordinates, testFile, testRank)
      testRank++ 
    }

  } else if (testRank < startRank && testFile > startFile) {
    for(testFile; testFile < endFile; testFile++) {
      checkPieceInTheWay (pieceInTheWay, pieceCoordinates, testFile, testRank)
      testRank--
    }
  }
}

function capture(activePiece, coordinates, originSquare, blackPiecesState, whitePiecesState, handleBlackPieces, handleWhitePieces) {
  if(activePiece[1].match(/[W]/)) {
    for (let [key, value] of Object.entries(blackPiecesState)) {
      if(value===coordinates) {
      
      handleBlackPieces(key, '')
      return true
      }
    }
  } else if (activePiece[1].match(/[B]/)) {
    for (let [key, value] of Object.entries(whitePiecesState)) {
      if(value===coordinates) {
      
      handleWhitePieces(key, '')
      return true
      }
  }
}
}




  export { capture, checkPieceInTheWay, handlePieceInTheWay, getTestRank, getTestFile, testRankAndFile }

 