import { useState } from 'react'
import TopNav from './components/Topnav'
import CardBanner from './components/Cardbanner'

import './App.css'

function App() {

  return (
    <div>
      <div className='cover-page'>
      <TopNav/>
     </div>
        <h3> Why Should We Use us </h3>
      <CardBanner/>
    </div>
)
  }
export default App
