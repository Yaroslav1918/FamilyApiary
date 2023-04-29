import { Box, Typography } from "@mui/material";
import Container from "../container";
import { Colors } from "../../styles";
import SliderProducts from "../sliderProducts";
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
    image: "/images/me.jpg",
  },
];

export default function OurTeam() {
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
            OUR TEAM OF EXPERTS
          </Typography>
          <Box
            component="p"
            mt={5}
            sx={{ fontSize: { xs: 14, md: 20, sm: 17 }, textAlign: "center" }}
          >
            Meet our passionate team of honey production professionals.
          </Box>
          <SliderProducts itemsArr={itemsArr} />
        </Container>
      </Box>
    );
};
