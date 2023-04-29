import { Card, CardMedia, CardContent, Typography, ListItem, Button } from "@mui/material";
import { Colors } from "../../styles";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import styled from "@emotion/styled";


interface ItemProductsProps {
  image: string;
  text: string;
  price: string;
}

const AnimatedCard = styled(Card)({
  transition: "transform 0.2s ease-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
});



export default function ItemProducts({
  image,
  text,
  price,
}: ItemProductsProps) {
    return (
      <ListItem
        sx={{
          width: { xs: "100%", md: "50%" },
        }}
      >
        <AnimatedCard sx={{ width: { xs: "100%", md: "300px" }}}>
          <CardMedia
            component="img"
            image={image}
            sx={{
              height: "300px",
              borderRadius: "5px",
              objectFit: "cover",
              objectPosition: "50% 50%",
            }}
          />

          <CardContent sx={{ textAlign: "center" }}>
            <Typography
              gutterBottom
              variant="h6"
              component="h6"
              sx={{ fontSize: { xs: "20px", md: "24px" }, fontWeight: 700 }}
            >
              {text}
            </Typography>
            <Typography
              component="p"
              sx={{
                color: Colors.warning,
                fontSize: { xs: "17px", md: "20px" },
              }}
            >
              {price}
            </Typography>
            <Button
              sx={{
                color: Colors.black,
                fontSize: { xs: "15px", md: "17px" },
                fontWeight: 600,
                display: "flex",
                alignItems: "baseline",
                margin: "0 auto",
              }}
            >
              <ShoppingBasketIcon
                sx={{ fontSize: { xs: "14px", md: "17px" }, mr: 0.5 }}
              />
              Add to cart
            </Button>
          </CardContent>
        </AnimatedCard>
      </ListItem>
    );
}
