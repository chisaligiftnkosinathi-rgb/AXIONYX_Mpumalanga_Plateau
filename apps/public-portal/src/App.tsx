import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Observatory from './pages/Observatory';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="observatory" element={<Observatory />} />
          <Route path="academy" element={<div className="p-8 text-center text-xl font-bold">Academy Portal (Coming Soon)</div>} />
          <Route path="collaborate" element={<div className="p-8 text-center text-xl font-bold">Collaboration Portal (Coming Soon)</div>} />
          <Route path="progress" element={<div className="p-8 text-center text-xl font-bold">Progress Dashboard (Coming Soon)</div>} />
          <Route path="journal" element={<div className="p-8 text-center text-xl font-bold">Founder's Journal (Coming Soon)</div>} />
          <Route path="vision" element={<div className="p-8 text-center text-xl font-bold">AXIONYX Vision (Coming Soon)</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
