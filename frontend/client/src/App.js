import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/CustomNavbar/CustomNavbar';
import Footer from './components/Footer';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import AboutUs from './pages/AboutUs';
import Pricing from './pages/Pricing';
import PlatformOverview from './pages/PlatformOverview';
import DashboardPage from './pages/DashboardPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/dashboard/*" element={<DashboardLayout />} />
          <Route path="/*" element={<MainLayout />} />
        </Routes>
      </div>
    </Router>
  );
}

const DashboardLayout = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<DashboardPage />} />
    </Routes>
  </div>
);

const MainLayout = () => (
  <div>
    <Navbar />
    <Header />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/platform" element={<PlatformOverview />} />
    </Routes>
    <Footer />
  </div>
);

export default App;
