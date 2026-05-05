import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Paragrafo from './components/paragrafo/paragrafo'
import Title from './components/Title/Title'

function App() {
  return (
    <>
      <Title texto = "Bem vindo, sou Titulo" /> 
      <Title texto = "Outro titulo" />
      <Paragrafo textoparagrafo = "Bem vindo, sou Paragrafo" />
    </>
  );
}

export default App

//criar um componente Title