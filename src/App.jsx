import Header from './components/header.jsx'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home.jsx'
// import Population from './components/Population.jsx'
import ToursistSpots from './components/ToursistSpots.jsx'
import About from './components/About.jsx'
import NavBar1 from './components/NavBar1.js'
import Dindigul from './components/Dindigul.jsx'
import Thanjavur from './components/Thanjavur.jsx'
import Nilgiris from './components/Nilgiris.jsx'
import Madurai from './components/Madurai.jsx'
import './App.css'


function App()  {

  return(
    
    <div class='flex'>
    <Header/>
    <NavBar1></NavBar1>
    <Routes>
      <Route path='project1/' element={<Home></Home>}></Route>
       <Route path='project1/nilgiris' element={<Nilgiris></Nilgiris>}></Route>
          <Route path='project1/dindigul' element={<Dindigul></Dindigul>}></Route>
             <Route path='project1/thanjavur' element={<Thanjavur></Thanjavur>}></Route>
                <Route path='project1/madurai' element={<Madurai></Madurai>}></Route>
        {/* <Route path='/population' element={<Population></Population>}></Route> */}
         <Route path='project1/touristspots' element={<ToursistSpots></ToursistSpots>}></Route>
          <Route path='project1/about' element={<About></About>}></Route>
          
    </Routes>
    </div>
    
  )
}
export default App
