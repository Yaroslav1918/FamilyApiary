import * as React from "react";
import { Menu } from "@mui/icons-material";
import {
  Box,
  Toolbar,
  List,
  Drawer,
  IconButton,
  AppBar,
  Typography,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import styled from "@emotion/styled";
import { Colors } from "../../styles";
import Logo from "../Logo";
import MenuList from "../menuList";
import { Link } from "react-router-dom";
import { routes } from "../../routes/config";
import CartButton from "../CartButton";
import { useAppSelector } from "../../helpers/hooks";
import UserMenu from "../userMenu/UserMenu";
import LngSwitcher from "../lngSwitcher/LngSwitcher";
import { useTranslation } from "react-i18next";
import AuthList from "../authList/AuthList";
const { contactUs } = routes;

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

interface NavItem {
  label: string;
  options?: string[];
}

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const { t } = useTranslation();
  const showAuthList = useMediaQuery("(min-width:500px)");
  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };
  const navItems: NavItem[] = [
    { label: t("home") },
    { label: t("pages"), options: [t("aboutUs"), t("contactUS")] },
    { label: t("products"), options: [t("shopList")] },
    { label: t("portfolio"), options: [t("gallery")] },
  ];
  const drawer = (
    <>
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
      {!showAuthList && <AuthList onCloseMenu={handleDrawerToggle} />}
    </>
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
                alignItems: "center",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CartButton />
          <LngSwitcher />
          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <Box>{showAuthList && <AuthList />}</Box>
          )}
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
          {t("contact")}
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
