import { Box, Container, Grid, Link, Typography } from "@mui/material";
import { Colors } from "../../styles";
import Logo from "../Logo/Logo";
import styled from "@emotion/styled";
import SocialList from "../socialList/SocialList";
import HiveIcon from "@mui/icons-material/Hive";

const StyledLink = styled(Link)({
  color: "inherit",
  fontSize: "19px",
  textDecoration: "none",
  cursor: "pointer"
});
export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundImage: "url('/images/backFooter.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        bgcolor: Colors.orange,
        pt: 8,
        position: "relative",
        borderRadius: "1%",
        textAlign: "center"
      }}
    >
      <Container maxWidth="lg" sx={{ mb: -6 }}>
        <Box
          sx={{
            position: "absolute",
            top: "-1%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "70%",

            height: "90px",
            bgcolor: "#FCD5CD",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Logo />
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              CONTACT INFO
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, fontSize: "19px" }}>
              Veselovka, Kherson region, Ukraine, 75421
              <br />
              Phone: (555) 333-4422
              <br />
              Email: bee@qodeinteractive.com
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              PRODUCTS
            </Typography>
            <Typography sx={{ mb: 2 }}>
              <StyledLink>Sunflowers honey</StyledLink>
              <br />
              <StyledLink>Flowers honey</StyledLink>
              <br />
              <StyledLink>Buckwheat honey</StyledLink>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              OUR HIVE
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              <StyledLink>Our Story</StyledLink>
              <br />
              <StyledLink>Our Retail Locations</StyledLink>
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4 }}>
          <Typography variant="body2" align="center" sx={{ fontSize: "19px" }}>
            Connect with us:
          </Typography>
          <SocialList />
          <HiveIcon
            style={{
              margin: "0 auto",
              marginTop: "15px",
              marginBottom: "10px",
              display: "block",
            }}
          />
          <Typography
            variant="body2"
            align="center"
            sx={{ fontSize: "15px", paddingBottom: "20px" }}
          >
            © 2023 Qode Interactive All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
