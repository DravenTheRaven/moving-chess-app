function checkPieceInTheWay (pieceInTheWay, pieceCoordinates, testFile, testRank) {
  for(let x = 0; x <= 31; x++) {   
    if ((String.fromCharCode(testFile+96)+testRank)=== pieceCoordinates[x]) {
      pieceInTheWay.push(pieceCoordinates[x])
      console.log(`${pieceCoordinates[x]} in the way`)
    }   
  }    
}

function handlePieceInTheWay(pieceInTheWay, handleUnselect, handlePieces, activePiece, coordinates) {
  if (pieceInTheWay.length > 0) {
    handleUnselect()
  } else {
    handlePieces(activePiece, coordinates)
  }
  console.log(pieceInTheWay)
}

function getTestRank(startRank, upDown) {
  let testRank = parseFloat(startRank) + upDown;
  console.log(testRank)
  return testRank
}

function getTestFile(startFile, upDown) {
  let testFile = parseFloat(startFile) + upDown
  console.log(testFile)
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

  export { checkPieceInTheWay, handlePieceInTheWay, getTestRank, getTestFile, testRankAndFile }

 