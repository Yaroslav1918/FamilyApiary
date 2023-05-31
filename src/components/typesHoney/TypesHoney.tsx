import {
  Grid,
  Box,
  Typography,
  CardMedia,
  Button,
  useTheme,
} from "@mui/material";
import Container from "../container";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Colors } from "../../styles";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { GetTranslatedItemsArray } from "../../helpers/transItemsArray";

export default function TypesHoney() {
  const theme = useTheme();
  const { t } = useTranslation();
  const products = GetTranslatedItemsArray();
  return (
    <Box component="section" pb={10}>
      <Container>
        <Typography
          component="h3"
          mt={3}
          sx={{
            fontSize: { md: 40, xs: 20, sm: 30 },
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          {t("typesHoney")}
        </Typography>
        <Typography
          component="p"
          mt={1}
          sx={{
            fontSize: { md: 20, xs: 17, sm: 19 },
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          {t("typesDes")}
        </Typography>
        <Grid container spacing={2}>
          {products
            .filter(({ category }) => category === t("honey"))
            .map(({ id, image, text, description }, index) => (
              <Grid key={index} item xs={12} md={4}>
                <CardMedia
                  component="img"
                  width={200}
                  height="300"
                  image={image}
                  sx={{ borderRadius: "5px", height: "auto" }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h6"
                    sx={{
                      fontWeight: "600",
                      textAlign: "center",
                      paddingTop: theme.spacing(2),
                    }}
                  >
                    {text}
                  </Typography>

                  <Typography
                    component="p"
                    mt={1}
                    sx={{
                      fontSize: "16px",
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
                    }}
                  >
                    {description}
                  </Typography>
                  <Button
                    component={Link}
                    to={`/${t("product")}/${text}`}
                    sx={{
                      color: theme.palette.warning.main,
                      fontSize: "16px",
                      display: "flex",
                      alignItems: "center",
                      margin: "0 auto",
                      paddingTop: theme.spacing(2),
                    }}
                  >
                    {t("learnMore")}
                    <Box
                      component="span"
                      sx={{
                        display: "flex",
                        fontSize: "26px",
                        marginLeft: theme.spacing(0.5),
                        color: theme.palette.warning.main,
                      }}
                    >
                      <KeyboardArrowRightIcon
                        sx={{
                          fontSize: "26px",
                          ml: 0.5,
                          color: Colors.warning,
                        }}
                      />
                    </Box>
                  </Button>
                </Box>
              </Grid>
            ))}
        </Grid>
      </Container>
    </Box>
  );
}
