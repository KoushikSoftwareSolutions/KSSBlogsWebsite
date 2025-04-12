import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Details from './pages/Details';
import Business from './pages/Business';
import Jobs from './pages/Jobs';
import Career from './pages/Career';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Tech from './pages/Tech';
import NavBar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/details' element={<Details />} />
          <Route path='/business' element={<Business />} />
          <Route path='/job' element={<Jobs />} />
          <Route path='/career' element={<Career />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/tech' element={<Tech />} />
        </Routes>
        <Footer />
    </Router>
  );
}
export default App;
