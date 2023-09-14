
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home, Profile, CampaignDetails, CreateCampaign } from './pages';
import { Sidebar, Navbar } from './components';

export default function App() {
  return (
    <div className='relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row '>
      <div className='sm:flex hidden mr-10'>
        <Sidebar />
      </div>

      <div className='flex-1 max-sm:w-full max-w-[1280px] max-auto sm:pr-5'>
        <Navbar />

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>

      </div>
    </div>
  );
}
