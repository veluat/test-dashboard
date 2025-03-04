import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Dashboard} from './pages/dashboard'
import {Results} from './pages/results'
import {Finalize} from './pages/finalize'
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={<Dashboard/>}/>
          <Route path='/results/:testId' element={<Results/>}/>
          <Route path='/finalize/:testId' element={<Finalize/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App