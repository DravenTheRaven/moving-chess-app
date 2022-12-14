export default function bishopMove(activePiece, coordinates, originSquare, blackPiecesState, whitePiecesState, turn, handleActivePiece, handleOriginSquare, handlePieces, handleDestination) {
  let startFile = (originSquare.charCodeAt(0) - 96);
	let endFile = (coordinates.charCodeAt(0) - 96);
	let startRank = originSquare[1];
	let endRank = coordinates[1];
	let rise = endRank - startRank
	let run = endFile - startFile
	let m = rise / run
	let pieceCoordinates = Object.values(blackPiecesState).concat(...Object.values(whitePiecesState));
	
	switch(m) {
		case 1: {		
			switch(Math.sign(rise)) {
				case 1: {
					let pieceInTheWay = []
					console.log('positive rise')
					let testRank = parseFloat(startRank) + 1;
					let testFile = parseFloat(startFile) + 1;
					for(testFile; testFile < endFile; testFile++) {
						for(let x = 0; x <= 31; x++) {
							switch ((String.fromCharCode(parseFloat(testFile) + 96) === pieceCoordinates[x][0])) {
								case true:
									switch (parseFloat(pieceCoordinates[x][1]) === testRank) {
										case true:
											pieceInTheWay.push(pieceCoordinates[x])
											console.log('intheway')
											console.log(true);	
											break;
										default:
											console.log('nope')
									}
							}
						}
						testRank++
					}
					if (pieceInTheWay.length > 0) {
						handleActivePiece('')
        		handleOriginSquare('')
        		handleDestination('')
					} else {
						handlePieces(activePiece, coordinates)
					}
					console.log(pieceInTheWay)
				} break;
				case -1: {
					let pieceInTheWay = []
					console.log('negative') 
					let testRank = parseFloat(startRank) - 1;
					let testFile = parseFloat(startFile) - 1;
					for(testFile; testFile > endFile; testFile--) {
						for(let x = 0; x <= 31; x++) {
							switch ((String.fromCharCode(parseFloat(testFile) + 96) === pieceCoordinates[x][0])) {
								case true:
									switch (parseFloat(pieceCoordinates[x][1]) === testRank) {
										case true:
											pieceInTheWay.push(pieceCoordinates[x])
											console.log('intheway')
											console.log(true);	
											break;
										default:
											console.log('nope')
									}
							}
						}
						testRank--
					
						}
						if (pieceInTheWay.length > 0) {
							handleActivePiece('')
							handleOriginSquare('')
							handleDestination('')
						} else {
							handlePieces(activePiece, coordinates)
						}
						console.log(pieceInTheWay)
				} break;
				default:
			}
		} break;
		case -1: {	
			
			switch(Math.sign(rise)) {
				case 1: {
					let pieceInTheWay = []	
					console.log('positive rise')
					let testRank = parseFloat(startRank) + 1;
					let testFile = parseFloat(startFile) - 1;
					for(testFile; testFile > endFile; testFile--) {
						for(let x = 0; x <= 31; x++) {
							switch ((String.fromCharCode(parseFloat(testFile) + 96) === pieceCoordinates[x][0])) {
								case true:
									switch (parseFloat(pieceCoordinates[x][1]) === testRank) {
										case true:
											pieceInTheWay.push(pieceCoordinates[x])
											console.log('intheway')
											console.log(true);	
											break;
										default:
											console.log('nope')
									}
							}
						}
						console.log(`${String.fromCharCode(parseFloat(testFile) + 96)} ${testRank} in the middle`)
						testRank++
					}
					if (pieceInTheWay.length > 0) {
						handleActivePiece('')
						handleOriginSquare('')
						handleDestination('')
					} else {
						handlePieces(activePiece, coordinates)
					}
					console.log(pieceInTheWay)
			} break;
				case -1: {
					let pieceInTheWay = []	
					console.log('negative') 
					let testRank = parseFloat(startRank) - 1;
					let testFile = parseFloat(startFile) + 1;
					for(testFile; testFile < endFile; testFile++) {
						for(let x = 0; x <= 31; x++) {
							switch ((String.fromCharCode(parseFloat(testFile) + 96) === pieceCoordinates[x][0])) {
								case true:
									console.log('piece in the way')
									switch (parseFloat(pieceCoordinates[x][1]) === testRank) {
										case true:
											pieceInTheWay.push(pieceCoordinates[x])
											console.log('intheway')
											console.log(true);	
											break;
										default:
											console.log('nope')
									}
							}
						}
						console.log(`${String.fromCharCode(parseFloat(testFile) + 96)} ${testRank} in the middle`)
						testRank--
					}
					if (pieceInTheWay.length > 0) {
						handleActivePiece('')
						handleOriginSquare('')
						handleDestination('')
					} else {
						handlePieces(activePiece, coordinates)
					}
					console.log(pieceInTheWay)
				} break;
				default:
			}
			
		} break;
		default:
	}
}

