import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './styles/Main.css'


import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import JobListingPage from './Pages/JobListingPage';
import JobDetailPage from './Pages/JobDetailPage';
import Page404 from './Pages/Page404';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/HomePage' element={<HomePage/>}/>
        <Route path='/jobs/' element={<JobListingPage/>}/>
        <Route path='/jobs/:jobID' element={<JobDetailPage/>}/>
        <Route path='/*' element={<Page404/>}/>  
      </Routes>
    </div>
  )
}

export default App
