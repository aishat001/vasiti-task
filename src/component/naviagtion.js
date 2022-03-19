import React from 'react'
import { Route, Routes } from 'react-router-dom'
import about from '../pages/about'
import contact from '../pages/contact'
import login from '../pages/login'
import signup from '../pages/signup'
import stories from '../pages/stories'

export default function Navigation() {
  return (
    <Routes>
            <Route path="/aboutUs" component={about} />
            <Route path="/stories" component={stories} />
            <Route path="/contact" component={contact} />
            <Route path="/login" component={login} />
            <Route path="/signup" component={signup} />
    </Routes>
  )
}
