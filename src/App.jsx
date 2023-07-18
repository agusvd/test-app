import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MenuDown from './components/MenuDown'
import MenuUp from './components/MenuUp'
import Home from './components/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div><MenuUp/><Home/><MenuDown/></div>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
