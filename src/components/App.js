import React from 'react'
import { BrowserRouter , Route } from 'react-router-dom';
import Home from '../routes/home/Home'
import Detail from '../routes/detail/Detail'

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/:id">
        <Detail />
      </Route>
    </BrowserRouter>
  )
}

export default App
