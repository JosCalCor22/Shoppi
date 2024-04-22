import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

/* Components */
import { Navbar } from '../../global/navbar/navbar';
import { Home } from '../home';
import { MyOrder } from '../MyOrder';
import { NotFound } from '../NotFound';
import { MyProfile } from '../MyProfile';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/*" element={<NotFound />} />
          <Route index path="/" element={<Home />} />
          <Route path="/my-order" element={<MyOrder />} />
          <Route path="/my-profile" element={<MyProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
