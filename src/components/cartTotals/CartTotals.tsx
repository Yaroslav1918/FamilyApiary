import {
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Box,
  Button,
} from "@mui/material";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { useState } from "react";
import ModalText from "../modalText";
import { useTranslation } from "react-i18next";
import { GetTranslatedItemsArray } from "../../helpers/transItemsArray";

export default function CartTotals() {
  const [openModal, setOpenModal] = useState(false);
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
  
  const total = productItems.reduce((acc, { quantity, id }) => {
    const product = translatedItemsArray.find((p) => p.id === id);
    if (product) {
      return acc + quantity * product.price;
    }
    return acc;
  }, 0);
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Box width="100%" mx="auto" mt={4}>
      <Typography variant="h4" align="center" gutterBottom>
        {t("order")}
      </Typography>
      <TableContainer component={Paper} elevation={16}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: { xs: "15px", md: "20px" } }}>
                {t("productCart")}
              </TableCell>
              <TableCell
                align="right"
                sx={{ fontSize: { xs: "15px", md: "20px" } }}
              >
                {t("subtotal")}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {translatedItems.map(({ id, text, quantity, totalPrice }) => (
              <TableRow key={id}>
                <TableCell sx={{ fontSize: "20px" }}>
                  {text} × {quantity}{" "}
                </TableCell>
                <TableCell align="right" sx={{ fontSize: "20px" }}>
                  {totalPrice} {t("currency")}
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell sx={{ fontSize: "20px" }}>{t("total")}</TableCell>
              <TableCell align="right" sx={{ fontSize: "20px" }}>
                {total} {t("currency")}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box mt={3} sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpenModal((prev) => !prev)}
        >
          {t("placeOrder")}
        </Button>
      </Box>
      {openModal && (
        <ModalText
          text={t("transaction")}
          openModal={openModal}
          handleCloseModal={handleCloseModal}
        />
      )}
    </Box>
  );
}
