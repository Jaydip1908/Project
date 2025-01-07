// import React from 'react'
// import BookingForm from './components/booking'
// import FlightList from './components/flightlist'
// import HotelList from './components/hotellist'
// import Navbar from './components/navbar'
// import { Route, Router, Routes } from "react-router-dom"
// // import { Navbar } from 'react-bootstrap'
// // import navbar from './components/navbar'
// // import { Navbar } from 'react-bootstrap'

// function App() {
//   return (
//     <div>
//       <Router>
//         <Navbar />
//         <Routes>
//           {/* <Route path="/" element={<Navbar />} /> */}
//           <Route path="/bookingform" element={<BookingForm />} />
//           <Route path="/filghtlist" element={<FlightList />} />
//           <Route path="/hotellist" element={<HotelList />} />
//         </Routes>
//       </Router>
//     </div>
//   )
// }

// export default App
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

