import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Dashboard} from './pages/dashboard'
import {Results} from './pages/results'
import {Finalize} from './pages/finalize'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<Dashboard/>}/>
        <Route path='/results/:testId' element={<Results/>}/>
        <Route path='/finalize/:testId' element={<Finalize/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App