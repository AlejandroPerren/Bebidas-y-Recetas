import React from 'react'
import { Header } from '../components/Header'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
    <Header/>

    <main className='container mx-auto py-16'>
    <Outlet/>
    </main>
    
    
    </>
  )
}
