import rookMove from "./rookMove"
import bishopMove from "./bishopMove"

export default function queenMove(value, i ,legalMoves, key) {
  rookMove(value, i, legalMoves, key)
  bishopMove(value, i, legalMoves, key)
}