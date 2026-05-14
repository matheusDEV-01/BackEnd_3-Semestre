
import './App.css'
import Header from './components/header/header'
import CadastroFrutasPage from './pages/cadastrofrutas/cadastrofrutaspage'
import HomePage from './pages/home/homepage'
import QuemSomosPage from './pages/quemsomos/quemsomospage'
import ProdutosPage from './pages/produtos/produtospage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
    
    {/* <BrowserRouter>
    <Header />
    <Routes>
      <Route element={<HomePage />} path="/" /> 
      <Route element={<ProdutosPage />} path='/produtos'/>
      <Route element={<QuemSomosPage />} path='/quemsomos'/>
      <Route element={<CadastroFrutasPage />} path='/cadfrutas'/>
    </Routes>
    </BrowserRouter> */}

    <ProdutosPage />
    

    </>
  )
}

export default App
