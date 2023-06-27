import React from 'react'
import Home from '../pages/Home'
import { Outlet, Link } from "react-router-dom";


const Header = () => {
  return (
    <header class="bg-white">
  <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
  <div class="flex lg:flex-1">
      <a href="#" class="-m-1.5 p-1.5">
        <Link to={`/company`} class="sr-only">Your Company</Link>
      </a>
    </div>
    <div class="flex lg:flex-1">
      <a href="#" class="-m-1.5 p-1.5" id='about'>
        <Link to={`/about`} class="sr-only">About</Link>
      </a>
    </div>
    <div class="flex lg:flex-1">
      <a href="#" class="-m-1.5 p-1.5">
        <Link to={`/`} class="sr-only">Home</Link>
      </a>
    </div>
    
  </nav>
 
</header>

  )
}

export default Header;
