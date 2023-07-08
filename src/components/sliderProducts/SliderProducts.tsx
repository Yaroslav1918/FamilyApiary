import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Button, Card, CardMedia } from "@mui/material";
import { Colors } from "../../styles";
import GalleryModal from "../galleryModal/GalleryModal ";
import { useState } from "react";
import { GetTranslatedItemsArray } from "../../helpers/transItemsArray";
import "react-alice-carousel/lib/alice-carousel.css";
import { styled } from "@mui/system";
import { SliderCard } from "../sliderCard";

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
  const products = GetTranslatedItemsArray();
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
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
            <SliderCard
              key={id}
              id={id}
              image={image}
              text={text}
              price={price}
              description={description}
              quantity={1}
            />
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
