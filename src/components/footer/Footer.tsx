import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Colors } from "../../styles";
import Logo from "../Logo/Logo";
import styled from "@emotion/styled";
import SocialList from "../socialList/SocialList";
import HiveIcon from "@mui/icons-material/Hive";
import { useTranslation } from "react-i18next";
import { routes } from "../../routes/config";
import { GetTranslatedItemsArray } from "../../helpers/transItemsArray";
const { contactUs, aboutUs } = routes;

const StyledLink = styled(Link)({
  color: "inherit",
  fontSize: "19px",
  textDecoration: "none",
  cursor: "pointer",
});
export default function Footer() {
  const { t } = useTranslation();
  const products = GetTranslatedItemsArray();
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
        textAlign: "center",
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
            bgcolor: Colors.bgFooter,
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
              {t("contactInfo")}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, fontSize: "19px" }}>
              {t("address")}
              <br />
              {t("phone")}
              <br />
              {t("emailF")}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              {t("productF")}
            </Typography>

            <List>
              {products.map(({ text, id }) => (
                <ListItem key ={id} sx ={{display: "flex", justifyContent:"center", alignItems: "center"}}>
                  <StyledLink to={`/${t("product")}/${text}`}>
                    {" "}
                    {text}
                  </StyledLink>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              {t("ourInfo")}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              <StyledLink to={aboutUs.path}> {t("ourStory")}</StyledLink>
              <br />
              <StyledLink to={contactUs.path}> {t("ourLoc")}</StyledLink>
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4 }}>
          <Typography variant="body2" align="center" sx={{ fontSize: "19px" }}>
            {t("connectWithUs")}
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
            {t("rightsRes")}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
