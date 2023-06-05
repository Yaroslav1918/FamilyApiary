import { useState } from "react";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import GalleryModal from "../galleryModal";
import { useTranslation } from "react-i18next";

const AnimatedImageListItem = styled(ImageListItem)({
  transition: "transform .2s ease-in-out",
  "&:hover": {
    transform: "scale(1.01)",
  },
});

const OurGallery = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const { t } = useTranslation();

  const itemData = [
    {
      img: "/images/ourGallery/apiaryPhoto3.jpg",
      title: "apiary",
    },
    {
      img: "/images/ourGallery/apiaryPhoto2.jpg",
      title: "apiary",
    },
    {
      img: "/images/ourGallery/fatherPhoto1.jpg",
      title: "apiary",
    },
    {
      img: "/images/ourGallery/apiary.jpg",
      title: "apiary",
    },
    {
      img: "/images/ourGallery/apiaryPhoto4.jpg",
      title: "apiary",
    },
    {
      img: "/images/ourGallery/apiaryPhoto5.jpg",
      title: "Hive",
    },
    {
      img: "/images/ourGallery/bee.jpg",
      title: "apiary",
    },
    {
      img: "/images/ourGallery/apiaryPhoto6.jpg",
      title: "apiary",
    },
    {
      img: "/images/ourGallery/apiaryPhoto1.jpg",
      title: "apiary",
    },
  ];

  const handleOpenModal = (img: string) => {
    setSelectedImage(img);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <Box component="section" pt={10} pb={10}>
      <Container>
        <Box component="div">
          <Typography
            component="h3"
            mt={3}
            sx={{
              fontSize: { md: 40, xs: 20, sm: 30 },
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            {t("ourGallery")}
          </Typography>
          <Box
            component="p"
            sx={{
              fontSize: { md: 20, xs: 15, sm: 19 },
              fontWeight: "500",
              mb: 5,
            }}
          >
            {t("ourGalleryDesk")}
          </Box>
        </Box>
        <ImageList
          cols={isSmallScreen ? 1 : 3}
          sx={{ mb: 4, overflow: "visible" }}
        >
          {itemData.map((item) => (
            <AnimatedImageListItem
              key={item.img}
              onClick={() => handleOpenModal(item.img)}
            >
              <img
                src={`${item.img}`}
                srcSet={`${item.img}`}
                alt={item.title}
                loading="lazy"
              />
            </AnimatedImageListItem>
          ))}
        </ImageList>
        <GalleryModal
          open={open}
          handleClose={handleCloseModal}
          selectedImage={selectedImage}
        />
      </Container>
    </Box>
  );
};

export default OurGallery;
