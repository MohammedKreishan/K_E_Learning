import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Dropdown,
} from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  return (
    <header
      style={{ paddingTop: "5px", background: "#063970", color: "white" }}
      className="p-3 mb-3 border-bottom"
    >
      <Container>
        <Navbar className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

          <Navbar.Brand
            href="/Home"
            className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none" 
          >
            <img
              style={{ width: "40px" }}
              src="https://img.freepik.com/free-vector/e-learning-global-community_24877-60109.jpg?w=1380&t=st=1705454600~exp=1705455200~hmac=3bec94245710a46ccbafbfe564339bb1698e96ea0865c74827b4e4f23ac7b6fb"
              alt="E-Learning Logo"
            />
            <span className="ms-2 fs-4" style={{color:"white"}}>E-Learning</span>
          </Navbar.Brand>

          <Nav className="col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <Nav.Link style={{ color: "white" }} href="/Home">
              Home
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} href="/users/aboutus">
              About Us
            </Nav.Link>

            <Dropdown
              style={{
                paddingTop: "5px",
                border: "none",
                background: "#063970",
                color: "white",
              }}
            >
              <Dropdown.Toggle
                style={{
                  paddingTop: "5px",
                  paddingLeft: "5px",
                  background: "#063970",
                  color: "white",
                }}
                id="dropdown-basic"
              >
                Categories
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/categories/marketingAndBusiness">
                  Marketing and Business{" "}
                </Dropdown.Item>{" "}
                <Dropdown.Item href="/categories/artsAndPhotography">
                  Arts and Photography{" "}
                </Dropdown.Item>{" "}
                <Dropdown.Item href="/categories/personalFinanceAndEconomics">
                  Personal Finance and Economics{" "}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>

          <Form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <FormControl
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
          </Form>

          <Dropdown className="text-end">
            <Dropdown.Toggle
              id="dropdownUser1"
              className="d-block link-dark text-decoration-none"
              role="button"
            >
              <img
                src="https://github.com/mdo.png"
                alt="mdo"
                width="32"
                height="32"
                className="rounded-circle"
              />
            </Dropdown.Toggle>

            <Dropdown.Menu className="text-small">
              <Dropdown.Item href="/users/dashboard">Dashboard</Dropdown.Item>

              <Dropdown.Divider />
              <Dropdown.Item href="/users/signOut">Sign out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Nav.Link style={{ margin: "8px" }} href="/users/login">
            Login
          </Nav.Link>
        </Navbar>
      </Container>
    </header>
  );
};

export default NavBar;
