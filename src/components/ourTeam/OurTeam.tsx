import { Box, Typography, CardMedia } from "@mui/material";
import Container from "../container";
import { Colors } from "../../styles";
import SliderProducts from "../sliderProducts";
import { useTranslation } from 'react-i18next';

const itemsArr = [
  {
    id: 1,
    image: "/images/family.jpg",
  },
  {
    id: 2,
    image: "/images/cat.jpg",
  },
  {
    id: 3,
    image: "/images/me.jpg",
  },
  {
    id: 4,
    image: "/images/ourGallery/fatherPhoto3.jpg",
  },
];

export default function OurTeam() {
  const { t } = useTranslation();
    return (
      <Box component="section" sx={{ padding: "50px 0" }}>
        <Container>
          <Typography
            component="h3"
            sx={{
              textAlign: "center",
              fontSize: "40px",
              fontWeight: "700",
            }}
          >
             {t("ourTeam")}  
          </Typography>
          <Box
            component="p"
            mt={5}
            sx={{ fontSize: { xs: 14, md: 20, sm: 17 }, textAlign: "center" }}
          >
            {t("meet")} 
          </Box>
          <SliderProducts itemsArr={itemsArr} />
        </Container>
      </Box>
    );
};
