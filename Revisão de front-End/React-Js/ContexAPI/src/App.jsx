
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Perfil from './components/perfil/Perfil'
import Produto from './components/produto/Produto'
import Cadastro from './components/produto/Cadastro'
import Listar from './components/produto/Listar'

const App = () => {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/listar" element={<Listar />} />
      </Routes>
    </BrowserRouter>



  )
}

export default App
