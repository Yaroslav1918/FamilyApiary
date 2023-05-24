import { Box, Typography } from "@mui/material";
import Container from "../container/Container";
import SliderProducts from "../sliderProducts";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";
import { useTranslation } from 'react-i18next';
import { GetTranslatedItemsArray } from "../../helpers/transItemsArray";

type OurProductsProps = {
  sx?: SxProps<Theme>;
};


export default function OurProducts({ sx }: OurProductsProps) {
  const {t} = useTranslation()
  const products = GetTranslatedItemsArray()
  return (
    <Box component="section" sx={{ paddingTop: "90px", ...sx }}>
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
            {t("ourProducts")}
          </Typography>
          <Box
            component="p"
            sx={{
              
              fontSize: { md: 20, xs: 15, sm: 19 },
              fontWeight: "500",
              mb: 5,
              textAlign: "center"
            }}
          >
            {t("productsDesk")}
          </Box>
        </Box>
        <SliderProducts itemsArr={products} addContent />
      </Container>
    </Box>
  );
};
