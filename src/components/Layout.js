import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <header>
        <nav>
          <Link to={"/"}>Main page</Link>
          <Link to={"OurCoffee"}>Our Coffee</Link>
          <Link to={"ForYourPleasure"}>For your Pleasure</Link>
        </nav>
      </header>
      <Outlet />
      <footer>
        <nav>
          <Link to={"/"}>Main page</Link>
          <Link to={"OurCoffee"}>Our Coffee</Link>
          <Link to={"ForYourPleasure"}>For your Pleasure</Link>
        </nav>
        <p>Our Number:7557</p>
      </footer>
    </div>
  );
}

export default Layout;
