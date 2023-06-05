import { Box, List, Typography } from "@mui/material";
import Container from "../container";
import { Colors } from "../../styles";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import CartItem from "../CartItem";
import { useTranslation } from "react-i18next";
import { GetTranslatedItemsArray } from "../../helpers/transItemsArray";
import CartTotals from "../cartTotals";

export default function Cart() {
  const totalQuantity = useSelector(
    (state: RootState) => state.cartItems.totalQuantity
  );
  const productItems = useSelector((state: RootState) => state.cartItems.items);

  const translatedItemsArray = GetTranslatedItemsArray();
  const { t } = useTranslation();
  const translatedItems = productItems.map((item) => {
    const translatedProduct = translatedItemsArray.find(
      (product) => product.id === item.id
    );
    const translatedText = translatedProduct?.text || item.text;
    const translatedPrice = translatedProduct?.price || item.price;
    const totalPrice = translatedPrice * item.quantity;

    return {
      ...item,
      text: translatedText,
      price: translatedPrice,
      totalPrice: totalPrice,
    };
  });

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
              fontSize: { md: 70, xs: 50, sm: 60 },
              position: "absolute",
              bottom: "10%",
            }}
          >
            {t("cart")}
          </Typography>
        </Box>
        {totalQuantity === 0 ? (
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
            {t("cartWarning")}
          </Typography>
        ) : (
          <>
            <List>
              <CartItem items={translatedItems} />
            </List>
            <CartTotals />
          </>
        )}
      </Container>
    </Box>
  );
}
