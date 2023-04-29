import * as React from "react";
import { ShoppingBasket, Menu } from "@mui/icons-material";
import {
  Box,
  Button,
  Toolbar,
  ListItemText,
  ListItemButton,
  ListItem,
  List,
  Drawer,
  IconButton,
  AppBar,
  Divider,
  Badge,
} from "@mui/material";

import styled from "@emotion/styled";
import { Colors } from "../../styles";
import Logo from "../Logo";

interface Props {
  window?: () => Window;
}
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const StyledButton = styled(Button)({
  color: Colors.white,
  backgroundColor: Colors.warning,
  padding: "10px 37px",
  textDecoration: "none",
  borderRadius: "5px",
  "&:hover": {
    backgroundColor: Colors.warningDark,
  },
});
const navItems = ["Home", "Pages", "Products", "Blog", "Portfolio"];

export default function NavBar (props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <AppBar position="sticky" >
      <StyledToolbar>
        <Logo/>
        <Box sx={{ display: { md: "block", xs: "none" } }}>
          {navItems.map((item) => (
            <Button key={item} sx={{ color: "inherit", fontSize: {xs: "14px", lg: "16px"} }}>
              {item}
            </Button>
          ))}
        </Box>
        <Box
          component="nav"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
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
        <StyledButton
          variant="text"
          sx={{ display: { md: "block", xs: "none" } }}
        >
          Contact
        </StyledButton>
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
