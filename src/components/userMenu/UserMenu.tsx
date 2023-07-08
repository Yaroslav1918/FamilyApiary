import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  IconButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import {
  ListAlt,
  LabelOutlined,
  ExitToApp,
  AccountCircle,
} from "@mui/icons-material";
import operations from "../../redux/auth/auth-operations";
import { useAppDispatch, useAppSelector } from "../../helpers/hooks";
import Avatar from "@mui/material/Avatar";
import { cartActions } from "../../redux/cart/cart_slice";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { routes } from "../../routes/config";
import { getIsLoggedIn } from "../../redux/auth/auth-selectors";
import FavoriteButton from "../favoriteButton";
const { orderHistory, wishList } = routes;

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const showContent = useMediaQuery("(max-width:491px)");
  const isLoggedIn = useAppSelector(getIsLoggedIn);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleClickToHome = () => {
    navigate("/");
  };
  const handleClickToOrderHistory = () => {
    navigate(orderHistory.path);
  };
  const handleClickToWishList = () => {
    navigate(wishList.path);
  };

  const username = useAppSelector((state) => state.auth.user?.name ?? "");
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <Avatar sx={{ width: 32, height: 32 }}>
          {username && username[0].toLocaleUpperCase()}
        </Avatar>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          <ListItemText primary={username} />
        </MenuItem>
        <MenuItem
          onClick={() => {
            dispatch(cartActions.resetToInitialState());
            dispatch(operations.logOut());
            handleClickToHome();
          }}
        >
          <ListItemIcon>
            <ExitToApp />
          </ListItemIcon>
          <ListItemText primary={t("logOut")} />
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClickToOrderHistory();
            handleClose();
          }}
        >
          <ListItemIcon>
            <ListAlt />
          </ListItemIcon>
          <ListItemText primary={t("orderHistory")} />
        </MenuItem>
        {showContent && isLoggedIn && (
          <MenuItem
            onClick={() => {
              handleClickToWishList();
              handleClose();
            }}
          >
            <ListItemIcon>
              <LabelOutlined />
            </ListItemIcon>
            <ListItemText primary={t("wishList")} />
            <FavoriteButton />
          </MenuItem>
        )}
      </Menu>
    </>
  );
};

export default UserMenu;
