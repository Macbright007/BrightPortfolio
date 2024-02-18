import React, { useContext } from 'react'
import "./themeStyles.css"
import { ThemeContext } from '../../context/ThemeContext'




const ThemeToggle = () => {
    const {toggleTheme, mode } = useContext(ThemeContext)


  return (
    <div className="container" onClick={toggleTheme}>
        <div className="icon">🌙</div>
        <div className="icon">🌞</div>
        <div className="ball" style={mode === "light" ? {left: "2px"} : {right: "2px"}}/>
    </div>
  )
}

export default ThemeToggle