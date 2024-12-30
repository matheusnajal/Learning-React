import React from 'react'

function Container( {children, myValue} ) {
  return (
    <div>
        <h2>Este é o título de conteiner</h2>
        {children}
        <p>O valor é: {myValue}</p>
    </div>
  )
}

export default Container