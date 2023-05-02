import * as React from "react";
import { ShoppingBasket, Menu } from "@mui/icons-material";
import {
  Box,
  Toolbar,
  List,
  Drawer,
  IconButton,
  AppBar,
  Badge,
  Typography,
} from "@mui/material";

import styled from "@emotion/styled";
import { Colors } from "../../styles";
import Logo from "../Logo";
import MenuList from "../menuList";
import { Link } from "react-router-dom";
import { routes } from "../../routes/config";
const { signIn, signUp, contactUs } = routes;


const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

interface NavItem {
  label: string;
  options?: string[];
}

const navItems: NavItem[] = [
  { label: "Home" },
  { label: "Pages", options: ["About us", "Contact us"] },
  { label: "Products", options: ["Shop list"] },
  { label: "Blog", options: ["News", "Tips", "Tutorials"] },
  { label: "Portfolio", options: ["Gallery"] },
];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };
  const drawer = (
    <List sx={{ display: "flex", flexDirection: "column" }}>
      {navItems.map(
        (item) =>
          item.options && (
            <MenuList
              item={item.label}
              options={item.options}
              key={item.label}
              onClick={handleDrawerToggle}
            />
          )
      )}
    </List>
  );
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Logo />
        <Box sx={{ display: { md: "flex", xs: "none" } }}>
          {navItems.map(
            (item) =>
              item.options && (
                <MenuList
                  item={item.label}
                  options={item.options}
                  key={item.label}
                />
              )
          )}
        </Box>
        <Box
          component="nav"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Drawer
            open={mobileOpen}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Badge
          badgeContent={4}
          color="error"
          sx={{ display: { md: "block", xs: "none" } }}
        >
          <ShoppingBasket />
        </Badge>
        <Box>
          <Typography
            component={Link}
            to={signIn.path}
            sx={{
              color: Colors.black,
              textDecoration: "none",
              marginRight: "5px",
            }}
          >
            Login
          </Typography>
          /
          <Typography
            component={Link}
            to={signUp.path}
            sx={{
              color: Colors.black,
              textDecoration: "none",
              marginLeft: "5px",
            }}
          >
            Sign Up
          </Typography>
        </Box>

        <Typography
          component={Link}
          to={contactUs.path}
          sx={{
            display: { xs: "none", md: "block" },
            color: Colors.white,
            backgroundColor: Colors.warning,
            padding: "10px 37px",
            textDecoration: "none",
            borderRadius: "5px",
            "&:hover": {
              backgroundColor: Colors.warningDark,
            },
          }}
        >
          Contact
        </Typography>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { md: "none", xs: "block" } }}
        >
          <Menu />
        </IconButton>
      </StyledToolbar>
    </AppBar>
  );
}
