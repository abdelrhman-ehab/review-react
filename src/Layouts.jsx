import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarComponent from './Components/NavbarComponent'

export default function Layouts() {
  return <>
    <NavbarComponent/>
    <Outlet/>
  </>
  
}
