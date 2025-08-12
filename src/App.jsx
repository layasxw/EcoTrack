import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'
import Home from './pages/Home.jsx'
import AddHabit from './pages/AddHabit.jsx'
import Motivation from './pages/Motivation.jsx'
import NavBar from './components/NavBar.jsx'
import News from "./pages/News.jsx"
import HabitsList from "./components/HabitsList.jsx"
function App() {
  const [habits, setHabits] = useState([]);
  useEffect(() => {
            const savedHabits = JSON.parse(localStorage.getItem('ecoHabbits') || '[]');
            setHabits(savedHabits);
    }, []);
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home habits={habits} setHabits={setHabits}/>}></Route>
          <Route path="/news" element={<News/>}></Route>
          <Route path="/add" element={<AddHabit habits={habits} setHabits={setHabits}/>}></Route>
          <Route path="/motiv" element={<Motivation habits={habits} setHabits={setHabits}/>}></Route>
          <Route path="/habits" element={<HabitsList habits={habits} setHabits={setHabits}/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
