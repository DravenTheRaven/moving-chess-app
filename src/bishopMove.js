export default function bishopMove(activePiece, coordinates, originSquare, blackPiecesState, whitePiecesState, turn, handleActivePiece, handleOriginSquare, handlePieces, handleDestination) {
  let startFile = (originSquare.charCodeAt(0) - 96);
	let endFile = (coordinates.charCodeAt(0) - 96);
	let startRank = originSquare[1];
	let endRank = coordinates[1];
	let rise = endRank - startRank
	let run = endFile - startFile
	let m = rise / run
	console.log(`start file ${startFile} end file ${endFile} run ${run}`)
	console.log(`start rank ${startRank} end rank ${endRank} rise ${rise}`)
	console.log(`m ${m}`)  

	switch(m) {
		case 1:
			console.log(1)
			switch(Math.sign(rise)) {
				case 1:
					console.log('positive rise')
					break;
				case -1: 
					console.log('negative') 
			}
			break;
		case -1:
			console.log(-1)
	}

	
}