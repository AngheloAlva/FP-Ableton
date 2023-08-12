/* eslint-disable no-unused-vars */
import React from 'react'
import { Logo } from '../src/assets/Logo'

export const NavBar = () => {
  return (
    <nav className='main-nav'>
      <div className='main-nav-links'>
        <Logo />
        <div>
          <a href='#'>Live</a>
          <a href='#'>Push</a>
          <a href='#'>Note</a>
          <a href='#'>Link</a>
          <a href='#'>Shop</a>
          <a href='#'>Packs</a>
          <a href='#'>Help</a>
          <a href='#' style={{ color: 'var(--orange)' }}>More +</a>
        </div>
      </div>

      <div className='main-nav-user'>
        <a href='#' style={{ color: 'var(--blue)' }}>Try Live for free</a>
        <a href='#'>Log in or register</a>
      </div>
    </nav>
  )
}
