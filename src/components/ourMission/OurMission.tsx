import { Box, Grid, Typography } from "@mui/material";
import Container from "../container/Container";
import { useTranslation } from "react-i18next";

export default function OurMission() {
  const { t } = useTranslation();
  return (
    <Box component="section" pt={1}>
      <Container>
        <Grid
          container
          spacing={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              sx={{
                width: "100%",
                display: "block",
                margin: "0 auto",
                borderRadius: "3px",
              }}
              alt="The house from the offer."
              src="/images/ourGallery/apiaryPhoto3.jpg"
              loading="lazy"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box component="div">
              <Typography
                component="h3"
                mt={3}
                sx={{
                  textAlign: "center",
                  fontSize: { md: 40, xs: 20, sm: 30 },
                  fontWeight: "600",
                }}
              >
                {t("ourMission")}
              </Typography>
              <Box
                component="p"
                sx={{
                  fontSize: { md: 25, xs: 17, sm: 19 },
                  fontWeight: "500",
                  my: 4,
                }}
              >
                {t("deskMision")}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
