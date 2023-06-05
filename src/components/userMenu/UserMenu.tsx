import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  IconButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ExitToApp from "@mui/icons-material/ExitToApp";
import operations from "../../redux/auth/auth-operations";
import { useAppDispatch, useAppSelector } from "../../helpers/hooks";
import Avatar from "@mui/material/Avatar";
import { cartActions } from "../../redux/cart/cart_slice";
import { useNavigate } from "react-router-dom";

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClickToHome = () => {
    navigate("/", { replace: true });
  };

  const username = useAppSelector((state) => state.auth.user.name ?? "");
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

        <MenuItem></MenuItem>
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
          <ListItemText primary="Logout" />
        </MenuItem>
      </Menu>
    </>
  );
};

export default UserMenu;
