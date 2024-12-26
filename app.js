import React from "react";
import ReactDOM from "react-dom/client";
import appLogo from "./assets/app-logo.png";
import biryaniLogo from "./assets/biryani.jpg";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img className="logo" src={appLogo} alt="app-logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div className="card">
      <div class="card-img">
        <img src={biryaniLogo} alt="restaurant-img" />
      </div>
      <div className="details">
        <h2>Meghana Foods</h2>
        <h4>South Indian, Biryani, spicy</h4>
        <h4>4.2</h4>
        <h4>34 mins</h4>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="Body-container">
      <div className="search">Search</div>
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

const AppContainer = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppContainer />);
