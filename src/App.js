import { useEffect } from 'react';
import './App.css';
import HomePage from './pages/index';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <HomePage />
  );
}

export default App;
