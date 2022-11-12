import './App.css';
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import ApplyForm from './pages/ApplyForm';
import Confirmation from './pages/Confirmation';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="wrapper">
          <Navbar/>
          <ToastContainer position="top-center" limit={1} theme="dark"/>
          <Routes>
            <Route index element={<LandingPage/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/apply-now">
              <Route index element={<ApplyForm/>}/>
              <Route path="confirmation" element={<Confirmation/>}/>
            </Route>
          </Routes>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
