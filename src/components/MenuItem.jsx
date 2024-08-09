import React from 'react'

const MenuItem = ({image, name, price}) => {
  return (
    <div>
      <div className="menuItem">
        <div style={{backgroundImage:`url(${image})`}}></div>
        <h1>{name}</h1>
        <p>${price}</p>
      </div>
    </div>
  )
}

export default MenuItem
