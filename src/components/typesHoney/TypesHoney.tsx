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


interface Item {
  id: number;
  image: string;
  title: string;
  description: string;
}

const itemsArr: Item[] = [
  {
    id: 1,
    image: "/images/sunFlowers.jpg",
    title: "Sunflowers honey",
    description:
      "Sunflower honey is a golden and aromatic nectar with a delicate floral flavor, harvested from bees that collect nectar from sunflower fields.",
  },
  {
    id: 2,
    image: "/images/flowersHoney.jpg",
    title: "Flowers honey",
    description:
      "Each jar of our flowers honey is carefully selected and expertly crafted to bring you the perfect balance of floral aromas, straight from the hive to your home.",
  },
  {
    id: 3,
    image: "/images/buckwheat.jpg",
    title: "Buckwheat honey",
    description:
      "Savor the distinctively bold and earthy flavor of our premium Buckwheat honey, sourced from the finest apiaries around Cherson region.",
  },
];

export default function TypesHoney() {
  const theme = useTheme();

  return (
    <Box component="section" pt={10} pb={10}>
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
          {itemsArr.map(({ title, description, id, image }) => (
            <Grid key={id} item xs={12} md={4}>
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
                {title}
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

