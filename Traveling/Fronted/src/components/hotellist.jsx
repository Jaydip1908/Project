import React from 'react'
import image1 from './img/1.avif'
import image2 from './img/2.avif'
import image3 from './img/3.webp'

function hotellist() {
  return (
    <div className="container my-5">
       {/* Header */}
       <h2 className="mb-4">All Rooms</h2>
       {/* Filters */}
       <div className="row mb-4">
         <div className="col-md-4">
           <input type="text" className="form-control" placeholder="Search" />
         </div>
         <div className="col-md-4">
           <select className="form-select">
             <option selected="">Number of Beds</option>
             <option value={1}>1</option>
             <option value={2}>2</option>
           </select>
         </div>
         <div className="col-md-4">
           <select className="form-select">
             <option selected="">Room Type</option>
             <option value="king">King</option>
             <option value="queen">Queen</option>
           </select>
         </div>
       </div>
       {/* Room Cards */}
       <div className="row">
         <div className="col-md-3 mb-4">
           <div className="card">
             <img
               src={image1}
               className="card-img-top"
               alt="Room"
             />
             <div className="card-body">
               <h5 className="card-title">
                 Downtown Portsmouth Private 
               </h5>
               <p className="card-text">$85 / Per Night</p>
               <p className="card-text">☆☆☆☆☆ (0 Reviews)</p>
               <a href="#" className="btn btn-primary">
                 View Details
               </a>
             </div>
           </div>
         </div>
         <div className="col-md-3 mb-4">
           <div className="card">
             <img
               src={image2}
               className="card-img-top"
               alt="Room"
             />
             <div className="card-body">
               <h5 className="card-title">
                 Spacious Suite in a quiet 
               </h5>
               <p className="card-text">$95 / Per Night</p>
               <p className="card-text">☆☆☆☆☆ (0 Reviews)</p>
               <a href="#" className="btn btn-primary">
                 View Details
               </a>
             </div>
           </div>
         </div>
         <div className="col-md-3 mb-4">
           <div className="card">
             <img
               src={image3}
               height={170}
               className="card-img-top"
               alt="Room"
             />
             <div className="card-body">
               <h5 className="card-title">Shangri-La Hotel, Washington</h5>
               <p className="card-text">$105 / Per Night</p>
               <p className="card-text">☆☆☆☆☆ (0 Reviews)</p>
               <a href="#" className="btn btn-primary">
                 View Details
               </a>
             </div>
           </div>
         </div>
         <div className="col-md-3 mb-4">
           <div className="card">
             <img
               src={image2}
               className="card-img-top"
               alt="Room"
             />
             <div className="card-body">
               <h5 className="card-title">Hotel Chimayo de Santa Fe Rooms</h5>
               <p className="card-text">$36 / Per Night</p>
               <p className="card-text">☆☆☆☆☆ (0 Reviews)</p>
               <a href="#" className="btn btn-primary">
                 View Details
               </a>
             </div>
           </div>
         </div>
       </div>
       {/* Pagination */}
       <nav aria-label="Page navigation">
         <ul className="pagination justify-content-center">
           <li className="page-item">
             <a className="page-link" href="#" aria-label="Previous">
               <span aria-hidden="true">«</span>
             </a>
           </li>
           <li className="page-item active">
             <a className="page-link" href="#">
               1
             </a>
           </li>
           <li className="page-item">
             <a className="page-link" href="#">
               2
             </a>
           </li>
           <li className="page-item">
             <a className="page-link" href="#" aria-label="Next">
               <span aria-hidden="true">»</span>
             </a>
           </li>
         </ul>
       </nav>
     </div>
  )
}

export default hotellist