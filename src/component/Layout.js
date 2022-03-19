import React from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'
import Navigation from './naviagtion'

export default function Layout({children}) {
  return (
    <>
        <Header/>
        <Navigation/>
            <main>
                {children}
            </main>
        <Footer/>
    </>
  )
}

