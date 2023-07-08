import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  Typography,
} from "@mui/material";
import GalleryModal from "../galleryModal";
import { Link } from "react-router-dom";
import { ShoppingBasket } from "@mui/icons-material";
import { Colors } from "../../styles";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { getIsLoggedIn } from "../../redux/auth/auth-selectors";
import { useDispatch, useSelector } from "react-redux";
import {
  addProducts,
  addToWishlistAsync,
  removeProductFromWishlist,
} from "../../redux/cart/cart_operations";
import { cartActions } from "../../redux/cart/cart_slice";
import {
  CheckBoxOutlined,
  CheckBoxOutlineBlankOutlined,
  Favorite,
  FavoriteBorder,
} from "@mui/icons-material";
import { getWishListProducts } from "../../redux/cart/cart_selectors";

interface SliderCardProps {
  id: number;
  image: string;
  text: string;
  price: number;
  description?: string;
  quantity: number;
  hideContent?: Boolean;
}

export const SliderCard = ({
  id,
  image,
  text,
  price,
  description,
  quantity,
  hideContent,
}: SliderCardProps) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const wishlist = useSelector(getWishListProducts);
  const isItemInWishlist = wishlist.some((item) => item.id === id);
  const isLoggedIn = useSelector(getIsLoggedIn);

  const handleOpenModal = (img: string) => {
    setSelectedImage(img);
    setOpen(true);
  };
  const handleToggleWishlist = () => {
    if (isItemInWishlist) {
      dispatch(removeProductFromWishlist(id));
    } else {
      const newItem = {
        id,
        image,
        price,
        quantity,
        totalPrice: price * quantity,
        text,
      };
      dispatch(addToWishlistAsync(newItem));
    }
  };

  const onAddToCart = () => {
    const cartItem = {
      id,
      text,
      image,
      price,
      quantity,
      totalPrice: price * quantity,
    };

    isLoggedIn
      ? dispatch(addProducts(cartItem))
      : dispatch(cartActions.addItemToCart(cartItem));
  };

  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <Card
      key={id}
      sx={{
        width: "370px",
        margin: "0 auto",
        position: "relative",

        transition: "transform 0.2s ease-out",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
    >
      <GalleryModal
        open={open}
        handleClose={handleCloseModal}
        selectedImage={selectedImage}
      />
      <CardMedia
        image={image}
        onClick={() => handleOpenModal(image)}
        sx={{
          height: "370px",
          borderRadius: "5px",
          objectFit: "cover",
          objectPosition: "50% 30%",
        }}
      />
      {isLoggedIn && (
        <Checkbox
          sx={{
            position: "absolute",
            top: 11,
            right: 30,
          }}
          checked={isItemInWishlist}
          onChange={handleToggleWishlist}
          icon={
            hideContent ? (
              <CheckBoxOutlineBlankOutlined sx={{ fontSize: "30px" }} />
            ) : (
              <FavoriteBorder sx={{ fontSize: "30px" }} />
            )
          }
          checkedIcon={
            hideContent ? (
              <CheckBoxOutlined color="error" sx={{ fontSize: "30px" }} />
            ) : (
              <Favorite color="error" sx={{ fontSize: "30px" }} />
            )
          }
        />
      )}

      <CardContent sx={{ padding: "16px 16px 0px !important" }}>
        <Typography
          gutterBottom
          variant="h6"
          component="h6"
          sx={{ textAlign: "center" }}
        >
          {text}
        </Typography>
        <Typography
          component="p"
          sx={{ color: Colors.warning, textAlign: "center" }}
        >
          {price} {t("currency")}
        </Typography>
        <Typography
          component="p"
          mt={1}
          sx={{
            overflow: "auto",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "3",
            WebkitBoxOrient: "vertical",
            scrollbarWidth: "thin",
            scrollbarColor: "transparent transparent",
            "&::-webkit-scrollbar": {
              width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "transparent",
            },
            "&::-webkit-scrollbar-track": {
              background: "transparent",
            },
            fontSize: "19px",
          }}
        >
          {description}
        </Typography>
      </CardContent>
      <Box
        sx={{
          display: "flex",
          alignItems: "center ",
          justifyContent: "space-evenly",
        }}
      >
        {!hideContent ? (
          <>
            <Button
              onClick={onAddToCart}
              sx={{
                color: Colors.black,
                fontSize: "15px",
                display: "flex",
                alignItems: "baseline",
                padding: "19px",
              }}
            >
              <ShoppingBasket sx={{ fontSize: "14px", mr: 0.5 }} />
              {t("addToCard")}
            </Button>
            <Box
              sx={{ textDecoration: "none", width: "40px" }}
              component={Link}
              to={`/${t("product")}/${text}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g id="Right">
                  <path
                    d="M14.707,12.707l-4,4a1,1,0,0,1-1.414-1.414L12.586,12,9.293,8.707a1,1,0,1,1,1.414-1.414l4,4A1,1,0,0,1,14.707,12.707Z"
                    style={{ fill: Colors.svg }}
                  />
                </g>
              </svg>
            </Box>
          </>
        ) : (
          <Box
            sx={{ textDecoration: "none", width: "40px" }}
            component={Link}
            to={`/${t("product")}/${text}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g id="Right">
                <path
                  d="M14.707,12.707l-4,4a1,1,0,0,1-1.414-1.414L12.586,12,9.293,8.707a1,1,0,1,1,1.414-1.414l4,4A1,1,0,0,1,14.707,12.707Z"
                  style={{ fill: Colors.svg }}
                />
              </g>
            </svg>
          </Box>
        )}
      </Box>
    </Card>
  );
};
