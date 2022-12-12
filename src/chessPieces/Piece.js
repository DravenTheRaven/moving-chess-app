import { useState } from 'react';

export default function Piece({ type, location, name, value }) {


  return (
    <div>
      <p>{name}</p>
      <img src={type} />
      <p>{value}</p>
    </div>
  )

}