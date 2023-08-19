import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <header>
        <nav>
          <Link to={"/"}> Main Page</Link>
          <Link to={"OurCoffee"}> Our Coffee</Link>
          <Link to={"ForYourPleasure"}> For your pleasure</Link>
        </nav>
      </header>
      <Outlet />
      <footer>
        <nav>
          <Link to={"/"}> Main Page</Link>
          <Link to={"OurCoffee"}> Our Coffee</Link>
          <Link to={"ForYourPleasure"}> For your pleasure</Link>
        </nav>
        <p>Our Number: 7577</p>
      </footer>
    </div>
  );
}

export default Layout;
