export default function Square({ rank, file, pieceImage }) {
  let coordinates = file + rank;
 
  return(
    <div className='square'>
      <img src={pieceImage} />
      <p>{coordinates}</p>
    </div>
  )
}