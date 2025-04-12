import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import LandingPage from './pages/LandingPage';
import Details from './pages/Details';
import Login from './pages/Login';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import { BlogDetail } from './pages/BlogDetail';
import BlogCategory from './pages/BlogCategory';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/details' element={<Details />} />
        <Route path='/category/:category' element={<BlogCategory />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/blog/:id' element={<BlogDetail />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
