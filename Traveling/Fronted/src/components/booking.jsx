import React from 'react'



function booking() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-purple">
        <div className="container">
          <a className="navbar-brand" href="#">
            Hotel Book
          </a>
          <div className="ms-auto">
            <a className="nav-link text-white" href="#">
              Login
            </a>
            <a className="nav-link text-white" href="#">
              Register
            </a>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <h1 className="text-center mb-4">Booking Form</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your full name"
              required=""
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required=""
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              placeholder="Enter your phone number"
              required=""
            />
          </div>
          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Booking Date
            </label>
            <input type="date" className="form-control" id="date" required="" />
          </div>
          {/* <div className="mb-3">
        <label htmlFor="time" className="form-label">
          Booking Time
        </label>
        <input type="time" className="form-control" id="time" required="" />
      </div> */}
          <div className="mb-3">
            <label htmlFor="comments" className="form-label">
              Additional Comments
            </label>
            <textarea
              className="form-control"
              id="comments"
              rows={3}
              placeholder="Any special requests or comments"
              defaultValue={""}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Submit Booking
          </button>
        </form>
      </div>
    </>
 )
}
export default booking

