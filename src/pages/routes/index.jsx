import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

/* Components */
/* Static Components */
import { ShopiCardProvider } from '../../context'
import { Navbar } from '../../components/navbar/navbar'
/* Dinamic Components */
import { Home } from '../home'
import { SignIn } from '../signIn'
import { MyOrder } from '../MyOrder'
import { NotFound } from '../NotFound'
import { MyProfile } from '../MyProfile'
import { MyLastOrder } from '../MyLastOrder'

function App() {
  return (
    <>
      <ShopiCardProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/*" element={<NotFound />} />
            <Route index path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/my-order" element={<MyOrder />} />
            <Route path="/my-profile" element={<MyProfile />} />
            <Route path="/my-order/my-last-order" element={<MyLastOrder />} />
            <Route path="/my-order/my-last-order/:id" element={<MyLastOrder />} />
          </Routes>
        </BrowserRouter>
      </ShopiCardProvider>
    </>
  )
}

export default App
