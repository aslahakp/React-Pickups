import React from 'react'
import { useContext } from 'react'
import { globalContext } from './Context';

const Text = () => {

   const { theme } = useContext(globalContext);

  return (
    <div>
      <h1 style={{backgroundColor:theme==='light'?'yellow':'green'}}>hello, its me zoeya</h1>
    </div>
  )
}

export default Text
