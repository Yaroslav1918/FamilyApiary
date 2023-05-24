import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  IconButton,
  CardMedia,
  useMediaQuery,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Colors } from "../../styles";
import { cartActions } from "../../redux/cart/cart_slice";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
interface Item {
  id: number;
  image: string;
  text: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

interface Props {
  items: Item[];
  hideContent?: Boolean;
  style?: React.CSSProperties;
}


export default function CartItem({ items, hideContent, style }: Props) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const isMobileScreen = useMediaQuery("(max-width:539px)");

  const cellStyle = {
    fontSize: isMobileScreen ? "12px" : "16px" 
  }
  return (
    <TableContainer
      component={Paper}
      sx={{ background: Colors.body_bg, ...style }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{ my: 2, fontSize: { md: "30px", xs: "20px" } }}
      >
        {t("shopCart")}
      </Typography>
      <Table sx={{ flex: 1 }}>
        <TableHead>
          <TableRow>
            <TableCell
              align="center"
              sx={cellStyle}
            >
              {t("productCart")}
            </TableCell>
            <TableCell
              align="center"
           sx={cellStyle}
            >
              {t("priceCart")}
            </TableCell>
            <TableCell
              align="center"
           sx={cellStyle}
            >
              {t("quantity")}
            </TableCell>
            <TableCell
              align="center"
           sx={cellStyle}
            >
              {t("total")}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map(
            ({ text, image, id, totalPrice, quantity, price }: Item) => (
              <TableRow key={id}>
                <TableCell
                  sx={{ display: "grid",
                  placeItems: "center",
                  ...cellStyle
                  }}
                >
                  {!isMobileScreen && (
                    <CardMedia
                      component="img"
                      image={image}
                      sx={{
                        width: "50px",
                        height: "50px",
                        marginRight: "5px",
                      }}
                    />
                  )}
                  {text}
                </TableCell>
                <TableCell align="center" sx={cellStyle}>{price}</TableCell>
                <TableCell align="center" sx={cellStyle}>{quantity}</TableCell>
                <TableCell align="center" sx={cellStyle}>
                  {totalPrice}
                  {t("currency")}
                </TableCell>
                {!hideContent && !isMobileScreen && (
                  <TableCell>
                    <IconButton
                      onClick={() =>
                        dispatch(cartActions.removeItemFromCart(id))
                      }
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                )}
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
