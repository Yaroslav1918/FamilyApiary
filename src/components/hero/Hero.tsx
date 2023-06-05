import { Box, Grid, Typography } from "@mui/material";
import Container from "../container/Container";
import ButtonStyled from "../buttonStyled/ButtonStyled";
import { useSpring, animated, AnimatedProps } from "@react-spring/web";
import { useTranslation } from "react-i18next";
const AnimatedTypography = animated(Grid);
interface AnimatedBoxProps extends AnimatedProps<typeof Box> {
  alt: string;
  src: string;
  sx: object;
}
const AnimatedBox = animated((props: AnimatedBoxProps) => (
  <Box component="img" {...props} />
));

export default function Hero() {
  const { t } = useTranslation();
  const springsDescription = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
    delay: 300,
  });
  const springsImg = useSpring({
    from: { opacity: 0, x: 200 },
    to: { opacity: 1, x: 100 },
    config: { duration: 500 },
    delay: 500,
  });

  return (
    <Box component="section" pt={10} pb={18}>
      <Container>
        <Grid
          container
          spacing={19}
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <AnimatedTypography
            item
            xs={10}
            md={6}
            style={{ justifyContent: "center", ...springsDescription }}
          >
            <Box
              component="p"
              sx={{ fontSize: { md: 29, xs: 17, sm: 25 }, fontWeight: "500" }}
            >
              {t("heroDesc")}
            </Box>
            <Typography
              component="h1"
              sx={{ fontSize: { md: 50, xs: 25, sm: 35 }, fontWeight: "600" }}
            >
              {t("title")}
            </Typography>
            <Box component="p" sx={{ fontSize: { xs: 14, md: 30, sm: 26 } }}>
              {t("descriptionHero")}
            </Box>
            <ButtonStyled text={t("viewMore")} to="/aboutUs" />
          </AnimatedTypography>
          <Grid item xs={6} sx={{ display: { md: "block", xs: "none" } }}>
            <link
              rel="prefetch"
              href="https://freepngimg.com/thumb/honey/37317-3-honey-transparent-image.png"
            />
            <AnimatedBox
              style={springsImg}
              sx={{
                width: { lg: "500px", md: "400px" },
                transform: "none !important",
              }}
              alt="Honey"
              src="https://freepngimg.com/thumb/honey/37317-3-honey-transparent-image.png"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
