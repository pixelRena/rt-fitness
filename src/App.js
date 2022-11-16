import './App.css';
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Programs from './pages/Programs';
import ApplyForm from './pages/ApplyForm';
import Confirmation from './pages/Confirmation';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="wrapper">
          <Navbar/>
          <ToastContainer position="top-center" limit={1} theme="dark"/>
          <ScrollToTop/>
          <Routes>
            <Route index element={<LandingPage/>}/>
            <Route path="/programs" element={<Programs/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/apply-now">
              <Route index element={<ApplyForm/>}/>
              <Route path="confirmation" element={<Confirmation/>}/>
            </Route>
            <Route path="/contact-me" element={<Contact/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
