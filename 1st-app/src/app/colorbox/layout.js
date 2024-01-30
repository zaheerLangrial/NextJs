import React from 'react'

function ColorBoxLayout({children , left , right}) {
    const isTrue = false
  return (
    <div>
        {children}
        {left}
        {right}
        <hr/> 
        {isTrue ? left : right}
    </div>
  )
}

export default ColorBoxLayout