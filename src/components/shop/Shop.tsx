import { useState } from "react";
import { Box, Button, Grid, List, ListItem, Typography } from "@mui/material";
import Container from "../container";
import { Colors } from "../../styles";
import ListProducts from "../listProducts";
import { useTranslation } from "react-i18next";
import { GetTranslatedItemsArray } from "../../helpers/transItemsArray";

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const products = GetTranslatedItemsArray();
  const { t } = useTranslation();

  const categories = [
    { id: "1", name: t("honey") },
    { id: "2", name: t("beProduc") },
  ];

  const filteredProducts =
    selectedCategory === ""
      ? products
      : products.filter(({ category }) => category === selectedCategory);
  return (
    <Box component="section" sx={{ padding: "50px 0 100px" }}>
      <Container>
        <Box
          sx={{
            backgroundImage: "url(/images/beeShop.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "right 35% top 35%;",
            height: "40vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            marginBottom: "70px",
          }}
        >
          <Typography
            variant="h1"
            component="h2"
            sx={{
              color: Colors.white,
              fontSize: { md: 70, xs: 50, sm: 60 },
              position: "absolute",
              bottom: "10%",
            }}
          >
            {t("shop")}
          </Typography>
        </Box>

        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          <Grid item xs={8} md={4}>
            <Typography
              component="h3"
              sx={{
                fontSize: { xs: 20, sm: 25 },
                fontWeight: "600",
                textAlign: { xs: "center", md : "left" },
              }}
            >
              {t("categories")}
            </Typography>
            <List>
              {categories.map(({ name, id }) => (
                <ListItem
                  key={id}
                  sx={{
                    display: " flex",
                    flexDirection: { xs: "column", md: "row" },
                    padding: 0,
                  }}
                >
                  <Button
                    onClick={() => setSelectedCategory(name)}
                    sx={{
                      fontSize: { md: 20, xs: 15 },
                      padding: 0,
                      color:
                        name === selectedCategory
                          ? Colors.primary
                          : Colors.black,
                      fontWeight: name === selectedCategory ? "bold" : "normal",
                    }}
                  >
                    {name}
                  </Button>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={8}>
            <Typography
              component="p"
              sx={{
                display: { xs: "none", md: "block" },
                marginBottom: "10px",
                fontSize: { xs: "17px", md: "23px" },
              }}
            >
              {t("showAllRes")} {filteredProducts.length}
            </Typography>
            <ListProducts products={filteredProducts} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
