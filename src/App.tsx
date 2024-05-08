import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Home'
import SecondPage from './pages/SecondPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/secondpage' element={<SecondPage />} />
      </Routes>
    </div>
  );
}

export default App;
