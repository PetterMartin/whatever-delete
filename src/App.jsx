import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg fixed-top m-2">
        <div className="container">

          <a className="navbar-brand" href="#">
            Your Logo
          </a>

          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                How it works
              </a>
            </li>
            <li className="nav-item ms-5">
              <a className="nav-link" href="#">
                Product
              </a>
            </li>
            <li className="nav-item ms-5">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item ms-5">
              <a className="nav-link" href="#">
                Resources
              </a>
            </li>
          </ul>

          <div className="d-flex">
            <a className="btn btn-outline-secondary mr-2" href="#">
              Log In
            </a>
            <button className="btn btn-primary">Get Started Free</button>
          </div>
        </div>
      </nav>
    </header>
  );
}


function App() {

  return (
    <>
    <Header />
    </>
  );
}

export default App
