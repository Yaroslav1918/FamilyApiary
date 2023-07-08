import { useState } from "react";
import { Box, Container, Typography, List, Grid, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import {
  getWishListProducts,
  getWishtTotalQuantity,
} from "../../redux/cart/cart_selectors";
import { Colors } from "../../styles";
import { SliderCard } from "../sliderCard";
import { GetTranslatedItemsArray } from "../../helpers/transItemsArray";
import ModalText from "../modalText/ModatText";
import { cartActions } from "../../redux/cart/cart_slice";
import { getAllSoldProducts } from "../../redux/cart/cart_operations";
import { getIsLoggedIn } from "../../redux/auth/auth-selectors";
export default function WishList() {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const totalQuantity = useSelector(getWishtTotalQuantity);
  const wishList = useSelector(getWishListProducts);
  const wishlistIds = wishList.map((item: { id: number }) => item.id);
  const translatedItemsArray = GetTranslatedItemsArray();
  const filteredItemsArray = translatedItemsArray.filter(({ id }) =>
    wishlistIds.includes(id)
  );
  const { t } = useTranslation();

  const wishtTotalQuantity = useSelector(getWishtTotalQuantity);

  const total = wishList.reduce((acc, { quantity, id }) => {
    const product = translatedItemsArray.find((p) => p.id === id);
    if (product) {
      return acc + quantity * product.price;
    }
    return acc;
  }, 0);

  const onCloseModal = () => {
    setOpenModal(false);
    isLoggedIn
      ? dispatch(getAllSoldProducts())
      : dispatch(cartActions.resetToInitialState());
  };
  return (
    <Box
      component="section"
      sx={{ background: Colors.body_bg, padding: "50px 0 100px" }}
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
              fontSize: { md: 70, xs: 40, sm: 60 },
              position: "absolute",
              bottom: "10%",
            }}
          >
            {t("wishList")}
          </Typography>
        </Box>
        {totalQuantity === 0 ? (
          <>
            <Typography
              gutterBottom
              variant="h6"
              component="h6"
              sx={{
                fontSize: { xs: "20px", md: "24px" },
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              {t("wishListWarning")}
            </Typography>
          </>
        ) : (
          <>
            <List>
              <Grid container spacing={2}>
                {filteredItemsArray.map(
                  ({ id, image, text, price, description }) => (
                    <Grid item xs={12} md={5.5} lg={4} key={id}>
                      <SliderCard
                        id={id}
                        image={image}
                        text={text}
                        price={price}
                        description={description}
                        quantity={1}
                        hideContent
                        // selected={selectedItems.includes(id)}
                        // onSelect={() => handleItemSelect(id)}
                      />
                    </Grid>
                  )
                )}
              </Grid>
            </List>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                marginTop: "15px",
                borderTop: `solid 1px ${Colors.border}`,
                paddingTop: "15px",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                  component="p"
                  sx={{
                    margin: "0px",
                    marginRight: "15px",
                    fontSize: { xs: "15px", md: "18px" },
                  }}
                >
                  <Box component="span" sx={{ marginRight: "5px" }}>
                    {" "}
                    {wishtTotalQuantity}
                  </Box>
                  {t("productsWorth")}
                </Box>
                <Box
                  component="p"
                  sx={{
                    margin: "0px",
                    marginRight: "15px", // Add some right margin for spacing
                    fontSize: { xs: "15px", md: "18px" },
                  }}
                >
                  {total} {t("currency")}
                </Box>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ fontSize: { xs: "13px", md: "15px" } }}
                  onClick={() => {
                    setOpenModal((prev) => !prev);
                  }}
                >
                  {t("placeOrder")}
                </Button>
              </Box>
            </Box>
          </>
        )}
      </Container>
      <ModalText
        text={t("transaction")}
        openModal={openModal}
        handleCloseModal={onCloseModal}
      />
    </Box>
  );
}
