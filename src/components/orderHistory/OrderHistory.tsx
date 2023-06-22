import {
  Box,
  CardMedia,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useSelector } from "react-redux";
import { getBroughtProducts } from "../../redux/cart/cart_selectors";
import { useTranslation } from "react-i18next";
import { GetTranslatedItemsArray } from "../../helpers/transItemsArray";
import { Colors } from "../../styles";
import Container from "../container/Container";
import { v4 as uuidv4 } from "uuid";
export const OrderHistory = () => {
  const broughtProducts = useSelector(getBroughtProducts);
  const translatedItemsArray = GetTranslatedItemsArray();
  const { t } = useTranslation();
  const translatedItems = Object.entries(broughtProducts).map(([date, boughtProduct]) => ({
    [date]: boughtProduct.items.map((item) => {
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
    }),
  }));

  const isMobileScreen = useMediaQuery("(max-width:539px)");
  const cellStyle = {
    fontSize: isMobileScreen ? "12px" : "16px",
  };
  return (
    <Box
      component="section"
      sx={{ background: Colors.body_bg, padding: "80px 0" }}
    >
      <Container>
        {Object.keys(broughtProducts).length === 0 ? (
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
            {t("purchaseHistory")}
          </Typography>
        ) : (
          <TableContainer component={Paper} sx={{ background: Colors.body_bg }}>
            <Typography
              variant="h4"
              align="center"
              sx={{ my: 2, fontSize: { md: "30px", xs: "20px" } }}
            >
              {t("orderHistory")}
            </Typography>
            <Table sx={{ flex: 1 }}>
              <TableHead>
                <TableRow>
                  <TableCell align="center" sx={cellStyle}>
                    {t("productCart")}
                  </TableCell>
                  <TableCell align="center" sx={cellStyle}>
                    {t("priceCart")}
                  </TableCell>
                  <TableCell align="center" sx={cellStyle}>
                    {t("quantity")}
                  </TableCell>
                  <TableCell align="center" sx={cellStyle}>
                    {t("total")}
                  </TableCell>
                  <TableCell align="center" sx={cellStyle}>
                    {t("date")}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {translatedItems.map((boughtProduct) =>
                  Object.entries(boughtProduct).map(([date, items]) =>
                    items.map((item) => (
                      <TableRow key={uuidv4()}>
                        <TableCell
                          sx={{
                            display: "grid",
                            placeItems: "center",
                            ...cellStyle,
                          }}
                        >
                          {!isMobileScreen && (
                            <CardMedia
                              component="img"
                              image={item.image}
                              alt={item.text}
                              sx={{
                                width: "50px",
                                height: "50px",
                                marginRight: "5px",
                              }}
                            />
                          )}
                          {item.text}
                        </TableCell>
                        <TableCell align="center" sx={cellStyle}>
                          {item.price}
                        </TableCell>
                        <TableCell align="center" sx={cellStyle}>
                          {item.quantity}
                        </TableCell>
                        <TableCell align="center" sx={cellStyle}>
                          {item.totalPrice}
                          {t("currency")}
                        </TableCell>
                        <TableCell align="center" sx={cellStyle}>
                          {date}
                        </TableCell>
                      </TableRow>
                    ))
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Container>
    </Box>
  );
};
