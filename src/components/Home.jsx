import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="container text-center d-flex flex-column justify-content-center align-items-center vh-100" style={{ width: "3000px" }}>
      {/* כותרת ראשית */}
      <h1 className="display-3 fw-bold text-dark"  >🍽 Kitchen Magic</h1>
      <p className="lead text-muted"  >Upgrade your cooking experience with premium kitchen essentials.</p>

      {/* כפתור חנות */}
      <Link to="/products" className="btn btn-dark btn-lg mt-3">
        🛍️ Shop Now
      </Link>


    </div>
  );
};

export default Home;

