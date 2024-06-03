
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home'
import Notes from './Pages/Notes'
import './App.css'

function App() {

  return (
    <>
      
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/notes' element={<Notes/>}/>
        </Routes>
      </Router>

    </>
  )
}

export default App
