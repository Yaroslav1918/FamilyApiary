import React, { useState } from "react";
import { Box, Button, Grid, List, ListItem, Typography } from "@mui/material";
import Container from "../container";
import { Colors } from "../../styles";
import ListProducts from "../listProducts";
import { products } from "../../helpers/data";

const categories = [
  { id: "1", name: "Honey" },
  { id: "2", name: "Beekeeping product" },
];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredProducts =
    selectedCategory === ""
      ? products
      : products.filter((product) => product.category === selectedCategory);
  return (
    <Box
      component="section"
      sx={{ background: Colors.body_bg, padding: "50px 0 100px" }}
    >
      <Container>
        <Box
          sx={{
            backgroundImage: "url(/images/beeShop.jpg)",
            backgroundSize: "cover",
            borderRadius: "2%",
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
         Shop
        </Typography>
        </Box>

        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          <Grid item xs={8} md={4}>
            <Typography
              component="h3"
              sx={{
                fontSize: { xs: 30 },
                fontWeight: "600",
              }}
            >
              CATEGORIES
            </Typography>
            <List>
              {categories.map((category) => (
                <ListItem key={category.id} sx={{ padding: 0 }}>
                  <Button
                    onClick={() => setSelectedCategory(category.name)}
                    sx={{
                      fontSize: { md: 20, xs: 20 },
                      padding: 0,
                      color:
                        category.name === selectedCategory
                          ? Colors.primary
                          : Colors.black,
                      fontWeight:
                        category.name === selectedCategory ? "bold" : "normal",
                    }}
                  >
                    {category.name}
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
              Showing all results {filteredProducts.length}
            </Typography>
            <ListProducts products={filteredProducts} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
