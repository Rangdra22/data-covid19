import React from "react";
import emoji from "../../images/emoji.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      {/* <nav>
        <div className="container navigation">
          <div className="logo">
            <p className="title-logo">Rangdra</p>
          </div>
          <ul className="nav-ul">
            <li className="nav-li">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-li">
              <Link to="/global">Global Statistik</Link>
            </li>
            <li className="nav-li">
              <Link to="/indo">Indonesia Statistik</Link>
            </li>
            <li className="nav-li">
              <Link to="/provinsi">Indonesia Per Provinsi</Link>
            </li>
          </ul>
        </div>
      </nav> */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light border-nav mb-3">
        <div className="container">
          <img src={emoji} alt="" className="logo-emoji" />
          <a class="navbar-brand name-logo">Rangdra</a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <div class="nav-link">
                  <Link to="/">Home</Link>
                </div>
              </li>
              <li class="nav-item">
                <div class="nav-link">
                  <Link to="/global">Global Statistik</Link>
                </div>
              </li>
              <li class="nav-item">
                <div class="nav-link">
                  <Link to="/indo">Indonesia Statistik</Link>
                </div>
              </li>
              <li class="nav-item">
                <div class="nav-link">
                  <Link to="/provinsi">Indonesia Per Provinsi</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
