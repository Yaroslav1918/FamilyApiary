import { Box, Typography } from "@mui/material";
import Container from "../container/Container";
import SliderProducts from "../sliderProducts";
import { products } from "../../helpers/data";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

type OurProductsProps = {
  sx?: SxProps<Theme>;
};


export default function OurProducts({ sx }: OurProductsProps) {
  return (
    <Box component="section" sx={{ paddingTop: "30px", ...sx }}>
      <Container>
        <Box component="div">
          <Typography
            component="h3"
            sx={{
              fontSize: { md: 40, xs: 20, sm: 30 },
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Our products
          </Typography>
          <Box
            component="p"
            sx={{
              fontSize: { md: 20, xs: 15, sm: 19 },
              fontWeight: "500",
              mb: 5,
            }}
          >
            Check out our online shop for cute bee-themed apparel, unique bee
            suits, educational tools, gift certificates and more.
          </Box>
        </Box>
        <SliderProducts itemsArr={products} addContent />
      </Container>
    </Box>
  );
};
