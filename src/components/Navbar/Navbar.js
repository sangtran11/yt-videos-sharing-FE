import React, { useState, useEffect } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

const NavbarComponent = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const logOut = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    setUser(null);
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand
          className="c-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          Movie Sharing
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          {user ? (
            <>
              <Navbar.Text className="pr-4">{`Signed in as: ${user?.result?.name}`}</Navbar.Text>
              <Button onClick={logOut}>Sign Out</Button>
            </>
          ) : (
            <Button
              onClick={() => {
                navigate("/signin");
              }}
            >
              Sign In
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
