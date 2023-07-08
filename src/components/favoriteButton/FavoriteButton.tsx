import FavoriteIcon from "@mui/icons-material/Favorite";
import { Badge, Button, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { routes } from "../../routes/config";
import * as React from "react";
import { Colors } from "../../styles";
import { useAppSelector } from "../../helpers/hooks";
import { getWishtTotalQuantity } from "../../redux/cart/cart_selectors";
const { wishList } = routes;

const FavoriteButton = () => {
  const totalQuantity = useAppSelector(getWishtTotalQuantity);

  return (
    <Button component={Link} to={wishList.path} sx={{ color: Colors.black }}>
      <Badge showZero badgeContent={totalQuantity} color="error">
        <FavoriteIcon />
      </Badge>
    </Button>
  );
};

export default FavoriteButton;
