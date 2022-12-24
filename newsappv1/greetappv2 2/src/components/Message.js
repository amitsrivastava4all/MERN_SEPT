import React from 'react'

export const Message = ({msg, myclass}) => {
    const h1Class = `${myclass} text-center`;
  return (
    <h1 className = {h1Class}>{msg}</h1>
  )
}
