import {
  Grid,
  CardMedia,
  Button,
  Typography,
  CardContent,
  TextField,
  Box,
  IconButton,
} from "@mui/material";
import { useParams } from "react-router-dom";
import SocialList from "../socialList";
import { Colors } from "../../styles";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import OurProducts from "../ourProducts";
import Container from "../container/Container";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../redux/cart/cart_slice";
import React, { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useTranslation } from "react-i18next";
import { GetTranslatedItemsArray } from "../../helpers/transItemsArray";
import { addProducts } from "../../redux/cart/cart_operations";
import { getIsLoggedIn } from "../../redux/auth/auth-selectors";

const HoneyCard = () => {
  const [quantity, setQuantity] = useState(1);
  const handleQuantityIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleQuantityDecrement = () => {
    setQuantity((prevQuantity) => prevQuantity - 1);
  };

  const handleQuantityChange = (event: any) => {
    setQuantity(+event.target.value);
  };
  const { name } = useParams();
  const { t } = useTranslation();
  const products = GetTranslatedItemsArray();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const onAddToCart = (
    id: number,
    text: string,
    image: string,
    price: number,
    quantity: number
  ) => {
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

  return (
    <>
      <Box
        component="section"
        sx={{ background: Colors.body_bg, padding: "50px 0 50px" }}
      >
        <Container>
          <Box
            sx={{
              backgroundImage: "url(/images/singleProduct.jpg)",
              backgroundSize: "cover",
              borderRadius: "2%",
              backgroundPosition: "right 50% top 45%;",
              height: "40vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              marginBottom: "70px",
            }}
          >
            <Typography
              variant="h1"
              component="h2"
              sx={{
                color: Colors.white,
                fontSize: { md: 70, xs: 45, sm: 60 },
                position: "absolute",
                bottom: "10%",
              }}
            >
              {t("productSingle")}
            </Typography>
          </Box>
          <Grid
            container
            spacing={2}
            columns={16}
            sx={{ justifyContent: "center", alignItems: "center" }}
          >
            {products
              .filter(({ text }) => text === name)
              .map(({ image, text, description, price, id }) => (
                <React.Fragment key={id}>
                  <Grid item xs={16} md={8}>
                    <CardMedia
                      component="img"
                      image={image}
                      loading="lazy"
                      alt="Raw honeycomb"
                      sx={{
                        width: { xs: "50%", md: "300px", lg: "400px" },
                        margin: "0 auto",
                        borderRadius: "5px",
                      }}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <CardContent sx={{ flexGrow: 1, padding: "0" }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h5"
                        sx={{
                          marginBottom: "30px",
                          fontSize: { xs: "20px", md: "30px", lg: "40px" },
                        }}
                      >
                        {text}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          marginBottom: "30px",
                          fontSize: { xs: "18px", lg: "25px" },
                        }}
                      >
                        {description}
                      </Typography>
                    </CardContent>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        mb: 4,
                        color: Colors.danger,
                        fontSize: "25px",
                        textAlign: { xs: "center", sm: "start" },
                      }}
                    >
                      {price} {t("currency")}
                    </Typography>
                    <Box
                      component="div"
                      sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                      }}
                    >
                      <TextField
                        id="quantity"
                        name="quantity"
                        label={t("quantity")}
                        value={quantity}
                        onChange={handleQuantityChange}
                        InputLabelProps={{
                          style: { color: Colors.black },
                          shrink: true,
                        }}
                        variant="outlined"
                        InputProps={{
                          inputProps: { min: 1, max: 10, step: 1 },
                          endAdornment: (
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              <IconButton
                                size="small"
                                onClick={handleQuantityDecrement}
                                disabled={quantity === 1}
                              >
                                <KeyboardArrowLeftIcon />
                              </IconButton>
                              <IconButton
                                size="small"
                                onClick={handleQuantityIncrement}
                                disabled={quantity === 10}
                              >
                                <KeyboardArrowRightIcon />
                              </IconButton>
                            </Box>
                          ),
                        }}
                        sx={{
                          width: { xs: "100%", md: "200px" },
                          marginRight: { xs: "0", md: "35px" },
                          marginBottom: { xs: "15px", md: "0" },
                        }}
                        size="medium"
                      />
                      <Button
                        variant="contained"
                        sx={{
                          display: "flex",
                          alignItems: { xs: "baseline", sm: "center" },
                          justifyContent: "center",
                          background: Colors.danger,
                          color: Colors.white,
                          padding: { xs: "10px", sm: "10px 20px" },
                          fontSize: { xs: "10px", sm: "13px" },
                          maxWidth: { xs: "100%" },
                          "&:hover": { backgroundColor: Colors.dangerDark },
                        }}
                        onClick={() =>
                          onAddToCart(id, text, image, price, quantity)
                        }
                      >
                        <ShoppingBasketIcon
                          sx={{
                            fontSize: { xs: 12, sm: 14 },
                            marginRight: "8px",
                          }}
                        />
                        {t("addToCard")}
                      </Button>
                    </Box>
                    <SocialList
                      sx={{
                        justifyContent: { md: "start", xs: "center" },
                        marginTop: "40px",
                      }}
                    />
                  </Grid>
                </React.Fragment>
              ))}
          </Grid>

          <OurProducts sx={{ paddingBottom: "90px", paddingTop: "90px" }} />
        </Container>
      </Box>
    </>
  );
};

export default HoneyCard;
