import React from 'react'
import Hero from './components/Hero';
import Nav from './components/Nav';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Dashboard/>
    </div>
  )
}

export default App