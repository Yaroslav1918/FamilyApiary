import { useState } from "react";
import { Menu } from "@mui/icons-material";
import { Box, Toolbar, List, Drawer, IconButton, AppBar, ListItem } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import styled from "@emotion/styled";
import { Colors } from "../../styles";
import Logo from "../Logo";
import MenuItemList from "../menuItemList";
import { Link } from "react-router-dom";
import { routes } from "../../routes/config";
import CartButton from "../CartButton";
import { useAppSelector } from "../../helpers/hooks";
import UserMenu from "../userMenu/UserMenu";
import LngSwitcher from "../lngSwitcher/LngSwitcher";
import { useTranslation } from "react-i18next";
import AuthList from "../authList/AuthList";
import { useOutsideClick } from "../../helpers/outsideClick";
import { getIsLoggedIn, getIsToken } from "../../redux/auth/auth-selectors";
import FavoriteButton from "../favoriteButton";

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
  const [mobileOpen, setMobileOpen] = useState(false);
  const isLoggedIn = useAppSelector(getIsLoggedIn);
  const token = useAppSelector(getIsToken);
  const showContent = useMediaQuery("(max-width:491px)");
  const { t } = useTranslation();
  const showAuthList = useMediaQuery("(min-width:500px)");
  const showUserMenu = useMediaQuery("(max-width:400px)");
  const hideContent = useMediaQuery("(min-width:490px)");
  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };
  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  const ref = useOutsideClick(handleDrawerToggle, mobileOpen);

  const navItems: NavItem[] = [
    { label: t("home") },
    { label: t("pages"), options: [t("aboutUs"), t("contactUS")] },
    { label: t("products"), options: [t("shopList")] },
    { label: t("portfolio"), options: [t("gallery")] },
  ];
  const drawer = (
    <Box
      ref={ref}
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <List sx={{ display: "flex", flexDirection: "column", paddingBottom: 0 }}>
        {navItems.map(
          (item) =>
            item.options && (
              <MenuItemList
                item={item.label}
                options={item.options}
                onDrawerOpen={handleDrawerClose}
                key={item.label}
              />
            )
        )}
      </List>
      {!showAuthList && !isLoggedIn && (
        <AuthList onCloseMenu={handleDrawerClose} flexDirection />
      )}
      <List sx={{ display: "flex", padding: 0 }}>
        {showUserMenu && isLoggedIn && token && (
          <ListItem>
            <UserMenu />
          </ListItem>
        )}
        {showContent && (
          <ListItem>
            <LngSwitcher />
          </ListItem>
        )}
      </List>
    </Box>
  );
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Logo />
        <Box component="nav">
          <Box sx={{ display: { md: "flex", xs: "none" } }}>
            {navItems.map(
              (item) =>
                item.options && (
                  <MenuItemList
                    item={item.label}
                    options={item.options}
                    key={item.label}
                  />
                )
            )}
          </Box>

          <Drawer
            open={mobileOpen}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "220px",
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
          {isLoggedIn && hideContent && <FavoriteButton />}
          <CartButton />
          {hideContent && <LngSwitcher />}
          {isLoggedIn && token && !showUserMenu ? (
            <UserMenu />
          ) : (
            <Box>{showAuthList && <AuthList />}</Box>
          )}
        </Box>
        <Box
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
        </Box>
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
