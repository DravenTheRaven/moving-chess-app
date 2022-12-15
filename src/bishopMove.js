import { checkPieceInTheWay, handlePieceInTheWay } from "./utils";

export default function bishopMove(handleUnselect, activePiece, coordinates, originSquare, blackPiecesState, whitePiecesState, turn, handleActivePiece, handleOriginSquare, handlePieces, handleDestination) {
  let startFile = (originSquare.charCodeAt(0) - 96);
	let endFile = (coordinates.charCodeAt(0) - 96);
	let startRank = originSquare[1];
	let endRank = coordinates[1];
	let rise = endRank - startRank
	let run = endFile - startFile
	let m = rise / run
	let pieceCoordinates = Object.values(blackPiecesState).concat(...Object.values(whitePiecesState));
	console.log(pieceCoordinates)
	switch(m) {
		case 1: 		
			switch(Math.sign(rise)) {
				case 1: {
					let pieceInTheWay = []
					console.log('positive rise')
					let testRank = parseFloat(startRank) + 1;
					let testFile = parseFloat(startFile) + 1;
					for (testFile; testFile < endFile; testFile++) {
						checkPieceInTheWay (pieceInTheWay, pieceCoordinates, testFile, testRank)
						testRank++						
					}
					handlePieceInTheWay(pieceInTheWay, handleUnselect, handlePieces, activePiece, coordinates)	
				} break;
				case -1: {
					let pieceInTheWay = []
					console.log('negative') 
					let testRank = parseFloat(startRank) - 1;
					let testFile = parseFloat(startFile) - 1;
					for(testFile; testFile > endFile; testFile--) {
						checkPieceInTheWay (pieceInTheWay, pieceCoordinates, testFile, testRank)
						testRank--
					}
					handlePieceInTheWay(pieceInTheWay, handleUnselect, handlePieces, activePiece, coordinates)
				} break;
				default:
			}
		 break;
		case -1: 	
			switch(Math.sign(rise)) {
				case 1: {
					let pieceInTheWay = []	
					console.log('positive rise')
					let testRank = parseFloat(startRank) + 1;
					let testFile = parseFloat(startFile) - 1;
					for(testFile; testFile > endFile; testFile--) {
						checkPieceInTheWay (pieceInTheWay, pieceCoordinates, testFile, testRank)
						console.log(`${String.fromCharCode(parseFloat(testFile) + 96)} ${testRank} in the middle`)
						testRank++
					}
					handlePieceInTheWay(pieceInTheWay, handleUnselect, handlePieces, activePiece, coordinates)
			} break;
				case -1: {
					let pieceInTheWay = []	
					console.log('negative') 
					let testRank = parseFloat(startRank) - 1;
					let testFile = parseFloat(startFile) + 1;
					for(testFile; testFile < endFile; testFile++) {
						checkPieceInTheWay (pieceInTheWay, pieceCoordinates, testFile, testRank)
						console.log(`${String.fromCharCode(parseFloat(testFile) + 96)} ${testRank} in the middle`)
						testRank--
					}
					handlePieceInTheWay(pieceInTheWay, handleUnselect, handlePieces, activePiece, coordinates)
				} break;
				default:
			}
		 break;
		default:
	}
}

