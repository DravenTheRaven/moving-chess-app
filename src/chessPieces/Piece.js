import { useState } from 'react';

export default function Piece({ type, location, name }) {


  return (
    <div>
      <p>{name}</p>
      <img src={type} />
    </div>
  )

}