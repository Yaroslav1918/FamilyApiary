import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik, Field, Form, FormikHelpers } from "formik";
import "react-app-polyfill/ie11";
import Container from "../container/Container";
import { Colors } from "../../styles";

type FormValues = {
  email: string;
  password: string;
};
const textFieldStyles = {
  padding: "10px",
  marginBottom: "5px",
  "& .MuiOutlinedInput-root": {
    color: Colors.black,
    "&:hover fieldset": {
      borderColor: Colors.black,
    },
    "&.Mui-focused fieldset": {
      borderColor: Colors.black,
    },
  },
};

export default function SignIn() {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (
    values: FormValues,
    { setSubmitting, resetForm }: FormikHelpers<FormValues>
  ) => {
    console.log(values);
    resetForm();
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  };
  return (
    <Box
      component="section"
      sx={{
        padding: "30px 0 100px",
      }}
    >
      <Container>
        <Typography
          component="h3"
          sx={{
            fontSize: { md: 30, xs: 15, sm: 20 },
            fontWeight: "600",
            textAlign: "center",
            color: Colors.muted,
          }}
        >
          Sign in
        </Typography>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ isSubmitting, resetForm }) => (
            <Form
              style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "400px",
                margin: "0 auto",
              }}
            >
              <Field
                as={TextField}
                label="Email"
                name="email"
                variant="outlined"
                margin="normal"
                InputLabelProps={{
                  style: { color: Colors.black },
                }}
                sx={textFieldStyles}
              />

              <Field
                as={TextField}
                label="Password"
                name="password"
                type="password"
                variant="outlined"
                margin="normal"
                InputLabelProps={{
                  style: { color: Colors.black },
                }}
                sx={textFieldStyles}
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                sx={{ marginTop: "16px", background: Colors.muted }}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </Box>
  );
}
