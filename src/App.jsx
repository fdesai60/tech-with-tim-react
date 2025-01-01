import './App.css'
import Header from './components/Header/Header'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home/Home'

function App() {
  return(
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>

   
  )
  
}

export default App
