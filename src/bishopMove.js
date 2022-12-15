import { moveValidation, checkPieceInTheWay, handlePieceInTheWay, getTestRank, getTestFile, testRankAndFile } from "./utils";

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
					let testRank = getTestRank(startRank, 1);
					let testFile = getTestFile(startFile, 1);
					testRankAndFile(testRank, startRank, testFile, startFile, endFile, pieceInTheWay, pieceCoordinates)
					handlePieceInTheWay(pieceInTheWay, handleUnselect, handlePieces, activePiece, coordinates)	
				} break;
				case -1: {
					let pieceInTheWay = []
					console.log('negative') 
					let testRank = getTestRank(startRank, -1);
					let testFile = getTestFile(startFile, -1);
					testRankAndFile(testRank, startRank, testFile, startFile, endFile, pieceInTheWay, pieceCoordinates)
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
					let testRank = getTestRank(startRank, 1);
					let testFile = getTestFile(startFile, -1);
					testRankAndFile(testRank, startRank, testFile, startFile, endFile, pieceInTheWay, pieceCoordinates)
					handlePieceInTheWay(pieceInTheWay, handleUnselect, handlePieces, activePiece, coordinates)
			} break;
				case -1: {
					let pieceInTheWay = []	
					console.log('negative') 
					let testRank = getTestRank(startRank, -1);
					let testFile = getTestFile(startFile, 1);
					testRankAndFile(testRank, startRank, testFile, startFile, endFile, pieceInTheWay, pieceCoordinates)
					handlePieceInTheWay(pieceInTheWay, handleUnselect, handlePieces, activePiece, coordinates)
				} break;
				default:
			}
		 break;
		default:
	}
}

