import React, { Fragment } from "react";
import User from "./UserProfile/User";

function NavBar() {
  return (
    <Fragment>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container d-flex justify-content-between">
            <a className="navbar-brand" href="">
              Front<span className="text fw-bold">Edge</span>
            </a>
            <div className="navbar" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item mx-4 p-2 text-center text-muted">
                  <i
                    className="fa fa-home text-light m-0 p-0"
                    aria-hidden="true"
                  />
                  <a className="nav-link m-0 p-0" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item mx-4 p-2 text-center text-muted">
                  <i
                    className="fa fa-credit-card-alt text-light m-0 p-0"
                    aria-hidden="true"
                  />
                  <a className="nav-link m-0 p-0" href="#">
                    Invoices
                  </a>
                </li>
                <li className="nav-item mx- p-2 text-center text-muted">
                  <i
                    className="fa fa-clipboard text-light m-0 p-0"
                    aria-hidden="true"
                  />
                  <a className="nav-link m-0 p-0" href="#">
                    Transactions
                  </a>
                </li>
                <li className="nav-item mx-4 p-2 text-center active active-bg border border-0 rounded">
                  <i
                    className="fa fa-address-book text-light m-0 p-0"
                    aria-hidden="true"
                  />
                  <a className="nav-link m-0 p-0 text-light" href="#">
                    Customers
                  </a>
                </li>
              </ul>
            </div>
            <User
              username="Babatunde Calebs"
              buisness="Exporter"
              image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt="profile picture"
            />
          </div>
        </nav>
      </header>
    </Fragment>
  );
}

export default NavBar;
