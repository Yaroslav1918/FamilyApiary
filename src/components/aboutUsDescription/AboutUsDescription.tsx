import { Box, Grid, Typography } from "@mui/material";
import { Colors } from "../../styles";
import Container from "../container/Container";

export default function AboutUsDescription() {
  return (
    <Box
      component="section"
      sx={{ background: Colors.white, padding: "50px 0" }}
    >
      <Container>
        <Box
          sx={{
            backgroundImage: "url(/images/apiary.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "right 35% top 40%;",
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

              position: "absolute",
              bottom: "10%",
            }}
          >
            About Us
          </Typography>
        </Box>

        <Grid
          container
          spacing={30}
          sx={{
            alignItems: { xs: "center", md: "baseline" },
            textAlign: { xs: "center", lg: "left" },
          }}
        >
          <Grid item xs={12} md={4}>
            <Typography
              component="h2"
              sx={{ fontSize: { xs: 20, sm: 25, md: 30 } }}
              mb={6}
            >
              WHAT ARE{" "}
              <Box component="span" sx={{ color: Colors.orange }}>
                HONEYBEES
              </Box>
            </Typography>
            <Box
              component="img"
              sx={{
                width: { xs: "80%", md: "300px", lg: "400px" },
              }}
              alt="The house from the offer."
              src="/images/imgBack.jpg"
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Box
              component="p"
              sx={{
                fontSize: { xs: 14, sm: 17, md: 20 },
                "&::first-letter": {
                  color: Colors.orange,
                  fontSize: "150%",
                },
              }}
              mb={5}
            >
              Honeybees are a type of bee that are known for their ability to
              produce honey. They are social insects that live in colonies or
              hives, where each individual bee has a specific role to play in
              maintaining the hive's health and productivity.
            </Box>
            <Box
              component="img"
              sx={{
                width: {
                  xs: "80%",
                  md: "400px",
                  lg: "300px",
                  borderRadius: "5%",
                },
                mr: { xs: 0, lg: 10 },
              }}
             
              alt="The house from the offer."
              src="/images/bee.jpg"
            />
            <Box
              component="img"
              sx={{
                width: {
                  xs: "80%",
                  md: "400px",
                  lg: "300px",
                  borderRadius: "5%",
                },
              }}
              alt="The house from the offer."
              src="/images/bee.jpg"
            />
            <Box
              component="p"
              mt={5}
              sx={{ fontSize: { xs: 14, md: 20, sm: 17 } }}
            >
              Honeybees are important pollinators and play a critical role in
              the reproduction of many plants, making them a vital part of many
              ecosystems. In a family apiary, honeybees are kept and cared for
              by beekeepers who work to maintain healthy hives and harvest honey
              for consumption or sale.
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
