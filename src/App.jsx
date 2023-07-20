import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MenuDown from './components/MenuDown'
import MenuUp from './components/MenuUp'
import Home from './components/Home'
import Profile from './components/Profile'
import Chats from './components/Chats'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div><MenuUp/><Home/><MenuDown/></div>}/>
        <Route path="/profile" element={<div><Profile/><MenuDown/></div>}/>
        <Route path='/chats' element={<div><Chats/></div>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
