import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Service from './pages/service/Service';
import Adoption from './pages/features/adoptions/Adoption';
import Team from './pages/features/team/Team';

const App = () => {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/adoption' element={<Adoption />} />
          <Route path='/team' element={<Team />} />
        </Routes>
      </div>
    </>
  )
}

export default App
