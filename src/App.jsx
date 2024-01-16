import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import { StartMenu } from './components/StartMenu'
import { MainMenu } from './components/MainMenu'
import { LevelOne } from './components/levels/LevelOne'
import { LevelTwo } from './components/levels/LevelTwo'
import { LevelThree } from './components/levels/LevelThree'
import { Leaderboard } from './components/Leaderboard'

function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path='/waldo-frontend/' element={<StartMenu/>}/>
        <Route path='/waldo-frontend/main-menu' element={<MainMenu/>}/>
        <Route path='/waldo-frontend/level-one' element={<LevelOne/>}/>
        <Route path='/waldo-frontend/level-two' element={<LevelTwo/>}/>
        <Route path='/waldo-frontend/level-three' element={<LevelThree/>}/>
        <Route path='/waldo-frontend/:level/leaderboard' element={<Leaderboard/>}/>
      </Routes>
    </AnimatePresence>
  )
}

export default App
