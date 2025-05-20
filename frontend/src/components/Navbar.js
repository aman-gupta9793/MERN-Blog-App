import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../redux/Store";

const Navbar = () => {
  // global state
  let isLogin = useSelector((state) => state.isLogin);
  isLogin = isLogin || localStorage.getItem("userId");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(isLogin);
  const [value, setValue] = useState();

  const handleLogout = () => {
    try {
      dispatch(authActions.logout());
      toast.success("logout successfully");
      navigate("/login");
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h4">Blog App</Typography>
        {isLogin && (
          <Box display={"flex"} marginLeft={"auto"} marginRight={"auto"}>
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              <Tab label="Blogs" LinkComponent={Link} to="/blogs" />
              <Tab label="My Blogs" LinkComponent={Link} to="/my-blogs" />
              <Tab label="Create Blog" LinkComponent={Link} to="/create-blog" />
            </Tabs>
          </Box>
        )}
        <Box display={"flex"} marginLeft="auto">
          {!isLogin && (
            <>
              <Button
                sx={{ margin: 1, color: "whitesmoke" }}
                LinkComponent={Link}
                to="/login"
              >
                Login
              </Button>
              <Button
                sx={{ margin: 1, color: "whitesmoke" }}
                LinkComponent={Link}
                to={"/register"}
              >
                Register
              </Button>
            </>
          )}
          {isLogin && (
            <Button
              onClick={handleLogout}
              sx={{ margin: 1, color: "whitesmoke" }}
            >
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
