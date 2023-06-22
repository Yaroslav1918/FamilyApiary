import { Box, Typography } from "@mui/material";
import Container from "../container";
import SliderProducts from "../sliderProducts";
import { useTranslation } from "react-i18next";

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
            fontSize: { xs: 25, md: 37, sm: 32 },
            fontWeight: "700",
          }}
        >
          {t("ourTeam")}
        </Typography>
        <Box
          component="p"
          mt={2}
          sx={{ fontSize: { xs: 17, md: 21, sm: 19 }, textAlign: "center" }}
        >
          {t("meet")}
        </Box>
        <SliderProducts itemsArr={itemsArr} />
      </Container>
    </Box>
  );
}
