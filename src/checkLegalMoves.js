export default function checkLegalMoves(pieceName, coordinates, blackPiecesState, whitePiecesState) {
  let legalMoves = []
  
  let files = ['h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];
  let pieceCoordinates = Object.values(blackPiecesState).concat(Object.values(whitePiecesState))
  
  function firstBlockingPiece(pieceInTheWay, legalMoves) {
    let greaterArr = [];
    let lesserArr = [];
    for (let blocking of pieceInTheWay) {
      if (blocking[1] < coordinates[1]) {
        lesserArr.push(blocking)
      } else if (blocking[1] > coordinates[1]) {
        greaterArr.push(blocking)
      }
    }
    console.log(lesserArr)
    console.log(greaterArr)
    let moveVerticleRook = lesserArr.reverse()[0]
    let moveVerticleRookUp = greaterArr[0]
    console.log(moveVerticleRook)
    console.log(moveVerticleRookUp)
    for(let i = moveVerticleRook[1]; i === moveVerticleRookUp[1]; i++) {
      console.log(coordinates[0]+i)
    }
    for(let i = moveVerticleRookUp[1]; i === moveVerticleRook[1]; i++) {
      console.log(coordinates[0]+i)
    }
    
  }
  
  switch(pieceName) {
    case 'aBPawn':
    case 'bBPawn':
    case 'cBPawn':
    case 'dBPawn':
    case 'eBPawn':
    case 'fBPawn':
    case 'gBPawn':
    case 'hBPawn':
      for (let i=1; i <= 8; i++) {
        for (let x in files) {
          if(coordinates[0]+ (parseFloat(coordinates[1]) - 1) === files[x]+i) {
            let pieceInTheWay = [] 
            for(let z = 0; z < 31; z++) {
              if(pieceCoordinates[z]===files[x]+i) {  
                pieceInTheWay.push(pieceCoordinates[z])
              }
            }
            if(pieceInTheWay.length===0) {
              legalMoves.push(files[x]+i)
            }
          } else if (coordinates[0] === files[x] && (parseFloat(coordinates[1]) - 2) === i && parseFloat(coordinates[1])===7) {
            let pieceInTheWay = []
            for(let z of pieceCoordinates) {
              if(z===files[x]+i) {  
                pieceInTheWay.push(z)
              } else if (z===(files[x]+ (parseFloat(i)+1))) {
                pieceInTheWay.push(z)
              }
            }
            if(pieceInTheWay.length===0) {
              legalMoves.push(files[x]+(i))
            }
          }
        }
      }
      console.log(`legal moves ${legalMoves}`)
      break
    case 'qBRook':
    case 'kBRook':
      let holdNum = 1;
      let i = 7;
      let pieceInTheWay = []
      while (holdNum <= 8) {
        for (let x of pieceCoordinates) {
          if (x === coordinates[0]+holdNum && x !== coordinates) {
            console.log(x)
            pieceInTheWay.push(x)     
          } 
        }
        for (let x of pieceCoordinates) {      
        if (x === files[i]+ coordinates[1] && x !== coordinates) {
            console.log(x)
            pieceInTheWay.push(x)
          }
        }
       holdNum ++
       i--
      }
      console.log(pieceInTheWay)
      firstBlockingPiece(pieceInTheWay)
      console.log(legalMoves)
      break
    case 'qBKnight':
    case 'kBKnight':
      break
    case 'qBBishop':
    case 'kBBishop':
      break
    case 'bBQueen':
      break
    case 'bBKing':
      break
    default:

  }
}