import { Box, Grid, Typography } from "@mui/material";
import { Colors } from "../../styles";
import Container from "../container/Container";
import { useTranslation } from "react-i18next";

export default function AboutUsDescription() {
  const { t } = useTranslation();
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
            {t("aboutUs")}
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
              {t("whatHon")}{" "}
              <Box component="span" sx={{ color: Colors.orange }}>
                {t("whatHoneyB")}
              </Box>
            </Typography>
            <Box
              component="img"
              sx={{
                width: { xs: "80%", md: "300px", lg: "400px" },
              }}
              alt={t("bee")}
              src="/images/imgBack.jpg"
              loading="lazy"
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
              {t("beeMeaning")}
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
                height: "400px",
                mr: { xs: 0, lg: 10 },
              }}
              alt="Apiary"
              src="/images/ourGallery/apiary.jpg"
              loading="lazy"
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
              alt="Apiary"
              src="/images/ourGallery/fatherPhoto1.jpg"
              loading="lazy"
            />
            <Box
              component="p"
              mt={5}
              sx={{ fontSize: { xs: 14, md: 20, sm: 17 } }}
            >
              {t("beeMeaningSecond")}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
