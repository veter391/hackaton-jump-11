import './App.scss'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Chat from './Components/Chat'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Chat name={'Jonni'}/>
    </>
  )
}

export default App
