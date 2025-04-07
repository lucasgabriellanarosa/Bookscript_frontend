import { IoPersonOutline } from 'react-icons/io5'
import './App.css'
import { NavItemContainer } from './components/NavItemContainer/NavItemContainer'
import { useContext } from 'react'
import { AppContext } from './contexts/AppContext'

function App() {

  const { text } = useContext(AppContext)

  return (
    <div>

      <header>
        <h1>Bookscript</h1>

        <NavItemContainer />
        
        <div>
          <IoPersonOutline />
          Usuário
        </div>

      </header>

      <h1>O texto é: {text}</h1>

    </div>
  )
}

export default App
