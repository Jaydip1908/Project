
import React from 'react';
import BookingForm from './components/booking';
import FlightList from './components/flightlist';
import HotelList from './components/hotellist';
import Navbar from './components/navbar';
import { Routes, Route } from 'react-router-dom';
import LoginSignup from './pages/loginpage';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookingForm />} />
        <Route path="/flightlist" element={<FlightList />} />
        <Route path="/hotellist" element={<HotelList />} />
        <Route path="/loginsignup" element={<LoginSignup />} />
      </Routes>
    </div>
  );
}

export default App;

