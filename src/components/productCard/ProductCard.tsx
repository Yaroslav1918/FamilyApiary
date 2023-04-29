import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";


const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "1rem",
  boxShadow: "none",
  transition: "transform 0.2s ease-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

const ProductCard = () => {
  return (
    <StyledCard>
      <CardMedia
        component="img"
        height="100%"
        image={"/images/buckwheat.jpg"}
        alt="Honey Jam"
        sx={{ width: "40%", objectFit: "cover" }}
      />
      <StyledCardContent>
        <CardHeader
          title="Honey Jam"
          subheader="$20.00"
          sx={{ fontSize: { md: 20, xs: 15 } }}
        />
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginBottom: "1rem" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Quantity
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          sx={{ margin: "1rem 0" }}
          startIcon={<ShoppingBasketIcon />}
        >
          ADD TO CART
        </Button>
        <Typography variant="body2" color="text.secondary">
          SKU: 8
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Categories: Honey & Comb, Raw & Unfiltered Honey
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Tags: Bee, Flower, Honey
        </Typography>
      </StyledCardContent>
    </StyledCard>
  );
};

export default ProductCard;
