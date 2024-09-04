import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/contact" Component={ContactPage} />
        <Route path="*" Component={NotFoundPage} />
      </Routes>
    </>
  );
}

export default App;
