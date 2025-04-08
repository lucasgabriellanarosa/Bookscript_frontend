import { NavItem } from './components/NavItem/NavItem'
import { NavItemContainer } from './components/NavItemContainer/NavItemContainer'

function App() {

  return (
    <div className='flex flex-row bg-lightBrown min-h-screen'>

      <header className='flex flex-col bg-brown items-center px-8 py-4'>

        <h1 className='text-4xl font-oregano'>Bookscript</h1>

        <NavItemContainer />
        
        <ul className='mt-auto'>
          <NavItem 
            icon='user'
            spanText='Usuário'
          />
        </ul>

      </header>

    </div>
  )
}

export default App
