import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Dashboard from './pages/dashboard/DashBoard';
import Description from './pages/dashboard/description/Description';
import Adoption from './pages/features/adoptions/Adoption';
import Team from './pages/features/team/Team';
import ForgotPassword from './pages/forgotpassword/ForgotPassword';
import Home from "./pages/home/Home";
import Login from './pages/login/Login';
import ResetPassword from './pages/resetpassword/ResetPassword';
import Service from './pages/service/Service';

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
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />
        </Routes>
      </div>
    </>
  )
}

export default App
