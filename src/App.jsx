import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import StarBackground from './components/StarBackground';



function App() {
  return (
    <>
      <BrowserRouter basename="/Portfolio">
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App
