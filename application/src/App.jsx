import { useState } from 'react'
import './App.css'

//Rotas
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './pages/form/Form.jsx';
import List from './pages/list/List.jsx';

function App() {
  
  return (
    <div className="App">

      <h1>Auto Peças</h1>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<List />}/>
          <Route path='/form' element={<Form />}/>
        </Routes>
      </BrowserRouter>
        
    </div>
  )
}

export default App
