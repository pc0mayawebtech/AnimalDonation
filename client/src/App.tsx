import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Service from './pages/service/Service';
import Adoption from './pages/features/adoptions/Adoption';
import Team from './pages/features/team/Team';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/DashBoard';
import Description from './pages/dashboard/description/Description';

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
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path="/description" element={<Description />} />
        </Routes>
      </div>
    </>
  )
}

export default App
