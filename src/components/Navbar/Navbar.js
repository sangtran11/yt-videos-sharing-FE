import React, { useState, useEffect } from "react";
import { Navbar, Container, Button, Stack } from "react-bootstrap";
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
          Funny Movies
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          {user ? (
            <Stack direction="horizontal" gap={3}>
              <Navbar.Text>{`Welcome: ${user?.result?.email}`}</Navbar.Text>
              <Button
                variant="success"
                onClick={() => {
                  navigate("/enter-url");
                }}
              >
                Share a movie
              </Button>
              <Button onClick={logOut}>Sign Out</Button>
            </Stack>
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
