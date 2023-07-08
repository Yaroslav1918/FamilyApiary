import { ShoppingBasket } from "@mui/icons-material";
import { Badge, Button, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { routes } from "../../routes/config";
import * as React from "react";
import Popover from "@mui/material/Popover";
import { Colors } from "../../styles";
import CartItem from "../CartItem";
import { useAppSelector } from "../../helpers/hooks";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { getTotalQuantity } from "../../redux/cart/cart_selectors";
const { cart } = routes;

const CartButton = () => {
  const totalQuantity = useAppSelector(getTotalQuantity);
  const items = useSelector((state: RootState) => state.cartItems.items);
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const isDesktopScreen = useMediaQuery("(min-width: 1200px)");
  const { t } = useTranslation();
  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  return (
    <Button
      component={Link}
      to={cart.path}
      sx={{ color: Colors.black }}
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
    >
      <Badge showZero badgeContent={totalQuantity} color="error">
        <ShoppingBasket />
      </Badge>
      {isDesktopScreen && (
        <Popover
          id="mouse-over-popover"
          sx={{
            pointerEvents: "none",
          }}
          open={open && isDesktopScreen}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          {items.length === 0 ? (
            <Typography sx={{ p: 1 }}>{t("shopCart")}</Typography>
          ) : (
            <CartItem items={items} hideContent />
          )}
        </Popover>
      )}
    </Button>
  );
};

export default CartButton;
