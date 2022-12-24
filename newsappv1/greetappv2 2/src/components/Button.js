import React from 'react'

const Button = ({labelValue, myClass, operation}) => {
    const myClassName = `btn btn-${myClass}`;
  return (
    <button onClick={operation} className={myClassName} >{labelValue}</button>
  )
}

export default Button