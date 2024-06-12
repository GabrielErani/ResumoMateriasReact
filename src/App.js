import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import PhpResumo from './pages/ResumoPHP/ResumoPHP';
import Algoritmos from './pages/ResumoAlgoritmos/ResumoAlgoritmos';
import BancoDeDadosMySQL from './pages/BancoDeDados/MySql';
function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/php' element={<PhpResumo />} />
  <Route path='/Algoritmos' element={<Algoritmos />} />
  <Route path='/MySQL' element={<BancoDeDadosMySQL />} />
</Routes>
</BrowserRouter>
  );
}

export default App;
