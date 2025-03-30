
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MindSweeper from './app/MindSweeper'
import TechnoCrat from './app/TechnoCrat'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Codefier from './app/Codefier'
import Register from './app/Register'
import UiDesign from './app/UiDesign'
import Gallery from './app/Gallery'
import Contact from './app/Conatct'
import Events from './app/Events'
import Home from './app/Home'


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/contact' Component={Contact} />

        <Route path='/gallery' Component={Gallery} />

        <Route path='/event' Component={Events} />
        <Route path='/event/codefier' Component={Codefier} />
        <Route path='/event/mindsweeper' Component={MindSweeper} />
        <Route path='/event/uidesign' Component={UiDesign} />
        <Route path='/event/technocrat' Component={TechnoCrat} />

        <Route path='/register' Component={Register} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}
