import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { scroller } from "react-scroll";

const NavigationMenu: React.FC<any> = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{ position: "sticky" }} fixed="top">
      <Nav className="mr-auto text-white " style={{ margin: "auto" }}>
        <Nav.Link
          onClick={() =>
            scroller.scrollTo("home", {
              smooth: true,
              offset: -70,
              duration: 500,
            })
          }
        >
          Home
        </Nav.Link>
        <Nav.Link
          onClick={() =>
            scroller.scrollTo("about", {
              smooth: true,
              offset: -70,
              duration: 500,
            })
          }
        >
          About
        </Nav.Link>
        <Nav.Link
          onClick={() =>
            scroller.scrollTo("contact", {
              smooth: true,
              offset: -70,
              duration: 500,
            })
          }
        >
          Contact
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavigationMenu;
