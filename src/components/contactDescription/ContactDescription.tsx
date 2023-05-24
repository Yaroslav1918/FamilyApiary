import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Colors } from "../../styles";
import Container from "../container/Container";
import {useState} from "react"
import { useTranslation } from "react-i18next";


export default function ContactDescription() {
  const { t } = useTranslation();
     const [formData, setFormData] = useState({
       name: "",
       email: "",
       phone: "",
       message: "",
     });

     const handleSubmit = (event: { preventDefault: () => void; }) => {
       event.preventDefault();
       setFormData({
         name: "",
         email: "",
         phone: "",
         message: "",
       });
     };

     const handleChange = (event: { target: { name: string; value: string; }; }) => {
       setFormData({ ...formData, [event.target.name]: event.target.value });
     };

  return (
    <Box component="section" sx={{ padding: "100px 0" }}>
      <Container>
        <Box
          sx={{
            backgroundImage: "url(/images/beePicture.jpg)",
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
            {t("contactUs")}
          </Typography>
        </Box>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "60px",
          }}
          component="form"
          onSubmit={handleSubmit}
        >
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label= {t("name")}
              margin="normal"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              required
              fullWidth
              label={t("email")}
              margin="normal"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label={t("phoneNumber")}  
              margin="normal"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label={t("message")} 
              margin="normal"
              multiline
              rows={6}
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              sx={{
                display: "flex",
                background: Colors.danger,
                color: Colors.white,
                padding: "10px 22px",
                width: { xs: "100%", md: "200px" },
                "&:hover": {
                  background: Colors.dangerDark,
                },
              }}
            >
              {t("submit")}
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Box
              sx={{
                backgroundImage: "url(/images/apiary.jpg)",
                backgroundSize: "cover",
                borderRadius: "2%",
                backgroundPosition: "right 35% top 35%;",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "70vh",
              }}
            ></Box>
          </Grid>
        </Grid>
        <iframe
          title="Our possition"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d700337.360529981!2d34.442953!3d46.711795!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c2fb0df11c1cd5%3A0x205d2e327def6a28!2sVeselivka%2C%20Kherson%20Oblast%2C%20Ukraine%2C%2075421!5e0!3m2!1sen!2sfi!4v1682770772218!5m2!1sen!2sfi"
          width="100%"
          height="400px"
        ></iframe>
      </Container>
    </Box>
  );
}
