import React from 'react'
import { BrowserRouter as BR, Routes, Route } from 'react-router-dom'
import Index from './components/Index'

function App() {
  return (
    <BR>
      <Routes>
        <Route exact path="/" element={ <Index />} />
      </Routes>
    </BR>
  );
}

export default App;
