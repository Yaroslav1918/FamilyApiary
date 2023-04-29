import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
const AnimatedImageListItem = styled(ImageListItem)({
  transition: "transform .2s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

const OurGallery = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const itemData = [
    {
      img: "https://picsum.photos/id/1018/300/200",
      title: "Hive",
    },
    {
      img: "https://picsum.photos/id/1025/300/200",
      title: "Beekeeper",
    },
    {
      img: "https://picsum.photos/id/1015/300/200",
      title: "Honey",
    },
    {
      img: "https://picsum.photos/id/1019/300/200",
      title: "Beehive",
    },
    {
      img: "https://picsum.photos/id/1037/300/200",
      title: "Bees",
    },
    {
      img: "https://picsum.photos/id/1024/300/200",
      title: "Hive",
    },
    {
      img: "https://picsum.photos/id/1002/300/200",
      title: "Honey",
    },
    {
      img: "https://picsum.photos/id/1011/300/200",
      title: "Beehive",
    },
    {
      img: "https://picsum.photos/id/1035/300/200",
      title: "Bees",
    },
  ];

  return (
    <Box component="section" pt={10}>
      <Container>
        <Box component="div">
          <Typography
            component="h3"
            mt={3}
            sx={{
              fontSize: { md: 40, xs: 20, sm: 30 },
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Our gallery
          </Typography>
          <Box
            component="p"
            sx={{
              fontSize: { md: 20, xs: 15, sm: 19 },
              fontWeight: "500",
              mb: 5,
            }}
          >
            Our gallery is a beautiful display of the various aspects of our
            family apiary. Featuring stunning photographs of our hives,
            beekeepers at work, and our delicious honey products, our gallery
            showcases the care and attention to detail that goes into every
            aspect of our beekeeping process.
          </Box>
        </Box>
        <ImageList cols={isSmallScreen ? 1 : 3} sx={{ mb: 4 }}>
          {itemData.map((item) => (
            <AnimatedImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </AnimatedImageListItem>
          ))}
        </ImageList>
      </Container>
    </Box>
  );
};

export default OurGallery;
