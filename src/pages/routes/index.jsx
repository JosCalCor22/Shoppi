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
import { LaptopPage } from '../laptops'
import { MyProfile } from '../MyProfile'
import { SkincarePage } from '../skincare'
import { FragancePage } from '../fragances'
import { MyLastOrder } from '../MyLastOrder'
import { ForniturePage } from '../forniture'
import { GroceriesPage } from '../groceries'
import { SmartphonePage } from '../smartphones'

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
            <Route path="/laptops" element={<LaptopPage />} />
            <Route path="/my-profile" element={<MyProfile />} />
            <Route path="/skincare" element={<SkincarePage />} />
            <Route path="/fragances" element={<FragancePage />} />
            <Route path="/groceries" element={<GroceriesPage />} />
            <Route path="/forniture" element={<ForniturePage />} />
            <Route path="/smartphones" element={<SmartphonePage />} />
            <Route path="/my-order/my-last-order" element={<MyLastOrder />} />
            <Route path="/my-order/my-last-order/:id" element={<MyLastOrder />} />
          </Routes>
        </BrowserRouter>
      </ShopiCardProvider>
    </>
  )
}

export default App
