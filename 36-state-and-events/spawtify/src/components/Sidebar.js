import React from 'react'
import Search from './Search'

const Sidebar = () => {

  return (
    <aside className="side-bar">
      <h1 className="logo">
        <span className="logo" role="img" aria-label="paw">🐾</span>
        Spawtify
      </h1>
      <Search />
    </aside>
  )
}

export default Sidebar