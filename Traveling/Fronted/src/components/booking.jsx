import React from 'react'
import { useState } from 'react';
import axios from 'axios';

function booking() {
  // const [formData, setFormData] = useState({
  //         user: '', 
  //         bookingType: '',
  //         serviceId: '', 
  //         startDate:'' ,
  //         endDate: '',
  //         totalPrice: '',
  //         status: '',
  // });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.id]: e.target.value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   try {
  //     const token = localStorage.getItem('token'); 
  //     if (!token) {
  //       alert('You need to log in first.');
  //       return;
  //     }
  
  //     const response = await axios.post(
  //       'http://localhost:8000/api/bookings',
  //       {
  //         user: '', 
  //         bookingType: '',
  //         serviceId: '', 
  //         startDate: formData.date,
  //         endDate: formData.date,
  //         totalPrice: '',
  //         status: '',
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`, // Include the token
  //         },
  //       }
  //     );
  
  //     alert('Booking successful!');
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //     alert('Error creating booking. Check if you are logged in.');
  //   }
  // };
  // };
  
  return (
    <div className="container w-50">
      <h1 className="text-center mb-4">Booking Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">Booking Date</label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="comments" className="form-label">Additional Comments</label>
          <textarea
            className="form-control"
            id="comments"
            rows={3}
            value={formData.comments}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Submit Booking</button>
      </form>
    </div>
  );
}

export default booking;

