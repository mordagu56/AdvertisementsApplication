import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './scss/App.scss'
import Router from './components/router'


render((
  <BrowserRouter>
    <Router />
  </BrowserRouter>
), document.getElementById('root'))
