import React from 'react'

const Fragmento = ({propFragment}) => {
  return (
    <div>
      <h2>Primeiro título</h2>
      <h3>Segundo título</h3>
      <h4>{propFragment}</h4>
    </div>
  )
}

export default Fragmento