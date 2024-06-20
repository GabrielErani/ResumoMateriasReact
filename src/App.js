import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import PhpResumo from './pages/ResumoPHP';
import Algoritmos from './pages/ResumoAlgoritmos';
import BancoDeDadosMySQL from './pages/MySql';
import { SvgBackgroundAnimated } from './components/Svgs';
import React_Page from './pages/Reactpage';
function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/php' element={<PhpResumo />} />
  <Route path='/Algoritmos' element={<Algoritmos />} />
  <Route path='/MySQL' element={<BancoDeDadosMySQL />} />
  <Route path='/React' element={<React_Page />} />
</Routes>
</BrowserRouter>
  );
}

export default App;
