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
import { products } from "../../helpers/data";

export default function TypesHoney() {
  const theme = useTheme();

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
          Types of honey
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
          Learn more about some of the products we take special pride in.
        </Typography>
        <Grid container spacing={2}>
          {products
            .filter((item) => item.category === "Honey")
            .map(({ id, image, text, description }, index) => (
              <Grid key={index} item xs={12} md={4}>
                <CardMedia
                  component="img"
                  width={200}
                  height="300"
                  image={image}
                  sx={{ borderRadius: "5px", height: "auto" }}
                />
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
                    textAlign: "center",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {description}
                </Typography>
                <Button
                  component={Link}
                  to={`/product/${text}`}
                  sx={{
                    color: theme.palette.warning.main,
                    fontSize: "16px",
                    display: "flex",
                    alignItems: "center",
                    margin: "0 auto",
                    paddingTop: theme.spacing(2),
                  }}
                >
                  Learn more
                  <Box
                    component="span"
                    sx={{
                      fontSize: "26px",
                      marginLeft: theme.spacing(0.5),
                      color: theme.palette.warning.main,
                    }}
                  >
                    <KeyboardArrowRightIcon
                      sx={{ fontSize: "26px", ml: 0.5, color: Colors.warning }}
                    />
                  </Box>
                </Button>
              </Grid>
            ))}
        </Grid>
      </Container>
    </Box>
  );
}
