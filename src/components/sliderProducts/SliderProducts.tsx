import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import { Colors } from "../../styles";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/cart/cart_slice";
import { ShoppingBasket } from "@mui/icons-material";
import GalleryModal from "../galleryModal/GalleryModal ";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { GetTranslatedItemsArray } from "../../helpers/transItemsArray";
import "react-alice-carousel/lib/alice-carousel.css";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

interface Item {
  id: number;
  image: string;
  text?: string;
  price?: string;
  description?: string;
}

const responsive = {
  0: { items: 1 },
  795: { items: 2 },
  1166: { items: 3 },
};
interface CustomDotProps {
  isActive: boolean;
}
const CustomDot = styled("span")<CustomDotProps>(({ isActive }) => ({
  backgroundColor: isActive ? Colors.svg : "gray",
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  display: "inline-block",
  margin: "0 5px",
  cursor: "pointer",
}));

const SliderProducts = ({
  itemsArr,
  addContent,
}: {
  itemsArr: Item[];
  addContent?: boolean;
}) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const products = GetTranslatedItemsArray();

  const handleOpenModal = (img: string) => {
    setSelectedImage(img);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };
  const CustomLeftArrow = ({
    onClick,
    isDisabled,
  }: {
    onClick?: () => void;
    isDisabled?: boolean;
  }) => (
    <Button onClick={onClick} disabled={isDisabled} sx={{ color: Colors.dark }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g id="Left">
          <path
            d="M14,17a1,1,0,0,1-.707-.293l-4-4a1,1,0,0,1,0-1.414l4-4a1,1,0,1,1,1.414,1.414L11.414,12l3.293,3.293A1,1,0,0,1,14,17Z"
            style={{ fill: isDisabled ? "grey" : Colors.svg }}
          />
        </g>
      </svg>
    </Button>
  );

  const CustomRightArrow = ({
    onClick,
    isDisabled,
  }: {
    onClick?: () => void;
    isDisabled?: boolean;
  }) => (
    <Button onClick={onClick} disabled={isDisabled} sx={{ color: Colors.dark }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g id="Right">
          <path
            d="M14.707,12.707l-4,4a1,1,0,0,1-1.414-1.414L12.586,12,9.293,8.707a1,1,0,1,1,1.414-1.414l4,4A1,1,0,0,1,14.707,12.707Z"
            style={{ fill: isDisabled ? "grey" : Colors.svg }}
          />
        </g>
      </svg>
    </Button>
  );

  return (
    <AliceCarousel
      items={itemsArr}
      responsive={responsive}
      controlsStrategy="alternate"
      renderPrevButton={({ isDisabled }) => (
        <CustomLeftArrow isDisabled={isDisabled} />
      )}
      renderNextButton={({ isDisabled }) => (
        <CustomRightArrow isDisabled={isDisabled} />
      )}
      renderDotsItem={({ isActive }) => <CustomDot isActive={isActive} />}
    >
      {addContent
        ? products.map(({ id, image, text, price, description }) => (
            <Card
              key={id}
              sx={{
                width: "370px",
                margin: "0 auto",
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
                <Button
                  onClick={() =>
                    dispatch(
                      cartActions.addItemToCart({
                        id,
                        text,
                        image,
                        price,
                        quantity: 1,
                        totalPrice: price * 1,
                      })
                    )
                  }
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
              </Box>
            </Card>
          ))
        : itemsArr.map(({ id, image }) => (
            <Card
              key={id}
              sx={{
                width: "370px",
                margin: "0 auto",
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
                  height: "430px",
                  borderRadius: "5px",
                  objectFit: "cover",

                  backgroundPosition: "50% 30%",
                }}
              />
            </Card>
          ))}
    </AliceCarousel>
  );
};

export default SliderProducts;
