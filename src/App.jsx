import './App.css'
import { NavBar } from './components/NavBar'
import { MammaMiaProvider } from './components/context/MyContext'
import AppRouter from './components/router/AppRouter'

function App() {


  return (
    <div>
      <MammaMiaProvider>
        <NavBar />
        <AppRouter />
      </MammaMiaProvider>
    </div>
  )
}

export default App
