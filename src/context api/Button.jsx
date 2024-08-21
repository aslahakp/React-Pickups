import React, { useContext } from 'react'
import { globalContext } from './Context'

const Button = () => {
    const {handleClick} = useContext(globalContext);

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Button
