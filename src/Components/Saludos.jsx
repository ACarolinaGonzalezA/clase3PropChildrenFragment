import React from 'react'

const Saludos = ({nombre, children}) => {
  return (
    <>
    <h1>Bienvenidos a mi Vite</h1>
        <h4>{children} {nombre}!</h4>
    </>
  )
}


export default Saludos