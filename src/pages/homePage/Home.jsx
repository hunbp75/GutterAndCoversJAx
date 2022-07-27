import { useEffect, useState } from "react";
import Weather from "../../components/Weather";
import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <p className="text">
          Gutters & Covers Llc. is a fully insured and licensed family owned
          business with the highest standards of quality, we warrant all of the
          materials and the have the highest warranty on Craftsmanship in
          Jacksonville and surrounding areas. It is my sincere desire to give
          our customers the best possible products and services available in the
          most customer-friendly timeframe possible. I encourage you to give
          Gutters & Covers Llc. the opportunity to serve you.
        </p>
        <p className="footer">Sincerely Peter Stampf - Owner and President</p>
      </div>
      <div>
        <Weather />
      </div>
    </div>
  );
};

export default Home;
