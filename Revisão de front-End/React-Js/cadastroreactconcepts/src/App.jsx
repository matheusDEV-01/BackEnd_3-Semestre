
import './App.css'
import Header from './components/header/header'
import CadastroFrutasPage from './pages/cadastrofrutas/cadastrofrutaspage'
import HomePage from './pages/home/homepage'
import QuemSomosPage from './pages/quemsomos/quemsomospage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
    
    <BrowserRouter>
    <Header />
    <Routes>
      <Route element={<HomePage />} path="/" /> 
      <Route element={<QuemSomosPage />} path='/quemsomos'/>
      <Route element={<CadastroFrutasPage />} path='/cadfrutas'/>
    </Routes>
    </BrowserRouter>
    

    </>
  )
}

export default App
