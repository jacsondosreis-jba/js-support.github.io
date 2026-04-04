import { useState } from 'react'
import Header from './components/header'
import Main from './components/main_inicio' 
import MainServicos from './components/main_servicos'
import MainContatos from './components/main_contatos'
import Footer from './components/footer'  
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Header />
    <Main />
    <MainServicos />
    <MainContatos />
    <Footer />

  
    </>
  )
}

export default App
