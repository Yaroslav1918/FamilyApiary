import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik, Field, Form, FormikHelpers } from 'formik';
import "react-app-polyfill/ie11";
import Container from '../container/Container';
import { Colors } from "../../styles";
import { useAppDispatch, useAppSelector } from "../../helpers/hooks";
import operations from "../../redux/auth/auth-operations";
import { Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

type FormValues = {
  name: string;
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

export default function SignUp() {
  const dispatch = useAppDispatch()
const {t} = useTranslation() 
  const isLoggedIn = useAppSelector(item =>item.auth.isLoggedIn)
    const initialValues = {
      name: "",
      email: "",
      password: "",
    };

   const onSubmit = (
     values: FormValues,
     { setSubmitting,  resetForm }: FormikHelpers<FormValues>
   ) => {
    dispatch(operations.register(values));
  resetForm();
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
            {t("signUp")}
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
                  label={t("name")}
                  name="name"
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{
                    style: { color: Colors.black },
                  }}
                  sx={textFieldStyles}
                />

                <Field
                  as={TextField}
                  label={t("email")}
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
                  label={t("password")}
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
                  {isSubmitting ? t("submitting") : t("submit")}
                </Button>
              </Form>
            )}
          </Formik>
          {isLoggedIn && <Navigate to="/shop" replace={true} />}
        </Container>
      </Box>
     
    );
};
