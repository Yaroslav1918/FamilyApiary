import { Box, Grid, Typography } from "@mui/material";
import Container from "../container/Container";

export default function OurMission() {
  return (
    <Box component="section" pt={10}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              sx={{ width: "100%", display: "block", margin: "0 auto" }}
              alt="The house from the offer."
              src="https://freepngimg.com/thumb/honey/37317-3-honey-transparent-image.png"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box component="div" textAlign="center">
              <Typography
                component="h3"
                mt={3}
                sx={{
                  fontSize: { md: 40, xs: 20, sm: 30 },
                  fontWeight: "600",
                }}
              >
                Our mission
              </Typography>
              <Box
                component="p"
                sx={{
                  fontSize: { md: 20, xs: 17, sm: 19 },
                  fontWeight: "500",
                  my: 4,
                }}
              >
                Our mission is to produce the finest quality honey and bee
                products, while promoting sustainable and responsible beekeeping
                practices that prioritize the health and wellbeing of our
                honeybees and the environment. We believe in the importance of
                preserving traditional methods of beekeeping and sharing our
                passion for the natural and delicious products that bees provide
                us with.
              </Box>
              <Box
                component="p"
                sx={{
                  fontSize: { md: 20, xs: 17, sm: 19 },
                  fontWeight: "500",
                  my: 4,
                }}
              >
                Our hope is that these backyard hives will facilitate a dialogue
                among neighbours, friends, family and the community at large
                about the huge importance of bees.
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
