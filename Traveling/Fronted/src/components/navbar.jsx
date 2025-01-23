import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function navbar() {
  return (
    <Navbar >

      <ul style={{ width: '100%', listStyle: 'none', padding: 0, display: 'flex', gap: '50px', fontSize: 20 }}>
        {/* <li>
          <Link className="abc" to="/" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>
            Booking Form
          </Link>
        </li> */}
        <li>
          <Link className="abc" to="/" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>
            Flight List
          </Link>
        </li>
        <li>
          <Link className="abc" to="/hotellist" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>
            Hotel List
          </Link>

        </li>
        <li>
          <Link className="abc" to="/loginsignup" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>
            LoginSignUp
          </Link>
        </li>
      </ul>

    </Navbar>
  )
}

export default navbar