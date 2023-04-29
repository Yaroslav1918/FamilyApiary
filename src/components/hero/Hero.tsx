import { Box, Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";
import Button from "../button/Button";
import Container from "../container/Container";




export default function Hero() {
 return (
   <Box component="section" pt={10}>
     <Container>
       <Grid
         container
         spacing={19}
         sx={{ alignItems: "center", justifyContent: "center" }}
       >
         <Grid item xs={10} md={6} sx={{ justifyContent: { xs: "center" } }}>
           <Box
             component="p"
             sx={{ fontSize: { md: 23, xs: 17, sm: 21 }, fontWeight: "500" }}
           >
             FRESH & SWEET AS HONEY.
           </Box>
           <Typography
             component="h1"
             sx={{ fontSize: { md: 70, xs: 30, sm: 40 }, fontWeight: "600" }}
           >
             HONEYBEE
           </Typography>
           <Box component="p" sx={{ fontSize: { xs: 14, md: 20, sm: 17 } }}>
             As a family-owned and operated apiary in Ukraine, we are dedicated
             to bringing you the purest and most delicious honey and bee
             products straight from the hive.
           </Box>
           <Button text="View More" />
         </Grid>
         <Grid item xs={6} sx={{ display: { md: "block", xs: "none" } }}>
           <Box
             component="img"
             sx={{ width: { lg: "500px", md: "400px" } }}
             alt="The house from the offer."
             src="https://freepngimg.com/thumb/honey/37317-3-honey-transparent-image.png"
           />
         </Grid>
       </Grid>
     </Container>
   </Box>
 );
}
