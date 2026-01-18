import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Zora from './pages/zora/zora';
import './App.css'

function App() {

  return (
    <div>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Zora/>} />
       </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
