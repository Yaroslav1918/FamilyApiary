import React from "react";
import {
  Grid,
  CardMedia,
  Button,
  Typography,
  CardContent,
  TextField,
  Box,
} from "@mui/material";
import SocialList from "../socialList";
import { Colors } from "../../styles";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import OurProducts from "../ourProducts";

const HoneyCard = () => {
  return (
    <>
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
          Product single
        </Typography>
      </Box>
      <Grid
        container
        spacing={2}
        columns={16}
        sx={{ justifyContent: "center" }}
      >
        <Grid item xs={16} md={8}>
          <CardMedia
            component="img"
            image="/images/honeycomb.jpg"
            alt="Raw honeycomb"
            sx={{ width: { xs: "100%", lg: "500px" } }}
          />
        </Grid>
        <Grid item xs={8}>
          <CardContent sx={{ flexGrow: 1, padding: "0" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                marginBottom: "30px",
                fontSize: { md: "30px", lg: "40px" },
              }}
            >
              WILDFLOWER HONEY
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                marginBottom: "30px",
                fontSize: { xs: "20px", lg: "25px" },
              }}
            >
              Experience the purest form of honey with our Raw Honeycomb, filled
              with natural goodness and bursting with sweet, golden nectar from
              the hive.
            </Typography>
          </CardContent>
          <Typography
            variant="subtitle1"
            sx={{ mb: 4, color: Colors.danger, fontSize: "25px" }}
          >
            $15.00
          </Typography>
          <Box
            component="div"
            sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
          >
            <TextField
              id="quantity"
              name="quantity"
              label="Quantity"
              type="number"
              InputLabelProps={{
                style: { color: Colors.black },
                shrink: true,
              }}
              variant="outlined"
              defaultValue={1}
              inputProps={{
                min: 1,
                max: 10,
                step: 1,
              }}
              sx={{
                width: { xs: "100%", md: "200px" },
                marginRight: { xs: "0", md: "35px" },
                marginBottom: { xs: "15px", md: "0" },
              }}
              size="medium"
            />
            <Button
              variant="contained"
              size="large"
              sx={{
                flexGrow: 1,
                background: Colors.danger,
                color: Colors.white,
                padding: "14px 22px",
                maxWidth: { xs: "100%", md: "200px" },
              }}
            >
              <ShoppingBasketIcon sx={{ fontSize: 15, marginRight: "5px" }} />{" "}
              ADD TO CART
            </Button>
          </Box>
          <SocialList sx={{ justifyContent: "flexStart", marginTop: "40px" }} />
        </Grid>
      </Grid>
      <OurProducts sx={{ paddingBottom: "90px" }} />
    </>
  );
};

export default HoneyCard;
