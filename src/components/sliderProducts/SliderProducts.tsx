import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Colors } from "../../styles";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import styled from "@emotion/styled";
import {Link} from "react-router-dom"

interface Item {
  id: number;
  image: string;
  text?: string;
  price?: string;
  description?: string;
}


const responsive = {
  0: { items: 1 },
  693: { items: 2 },
  1024: { items: 3 },
};
const AnimatedCard = styled(Card)({
  transition: "transform 0.2s ease-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

const SliderProducts = ({
  itemsArr,
  addContent
}: {
  itemsArr: Item[];
  addContent?: boolean;
}) => {
  return (
    <AliceCarousel
      mouseTracking
      items={itemsArr}
      responsive={responsive}
      controlsStrategy="alternate"
    >
      {itemsArr.map(({ id, image, text, price, description }) => (
        <Card
          key={id}
          sx={{
            width: "300px",
            transition: "transform 0.2s ease-out",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
          component={Link}
          to={`/product/${text}`}
        >
          <CardMedia
            component="img"
            image={image}
            sx={{
              height: "300px",
              borderRadius: "5px",
              objectFit: "cover",
              objectPosition: "50% 30%",
            }}
          />
          {addContent && (
            <CardContent sx={{ textAlign: "center" }}>
              <Typography gutterBottom variant="h6" component="h6">
                {text}
              </Typography>
              <Typography component="p" sx={{ color: Colors.warning }}>
                {price}
              </Typography>
              <Typography component="p" mt={1} sx={{ fontSize: "12px" }}>
                {description}
              </Typography>
              <Button
                sx={{
                  color: Colors.black,
                  fontSize: "10px",
                  display: "flex",
                  alignItems: "baseline",
                  margin: "0 auto",
                }}
              >
                <ShoppingBasketIcon sx={{ fontSize: "12px", mr: 0.5 }} />
                Add to cart
              </Button>
            </CardContent>
          )}
        </Card>
      ))}
    </AliceCarousel>
  );
};

export default SliderProducts;
