import React, { createContext, useState } from 'react'

   export const globalContext = createContext(null);

const Context = ({children}) => {
    const [theme,setTheme] = useState('light');
    const handleClick = ()=>{
        setTheme(theme==='light'?'dark':'light')
    }
      return (
    <div>
      <globalContext.Provider value={{theme,handleClick}}>
        { children }
      </globalContext.Provider>
    </div>
  )
}

export default Context
