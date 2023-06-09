import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from "formik";
import "react-app-polyfill/ie11";
import Container from "../container/Container";
import { Colors } from "../../styles";
import operations from "../../redux/auth/auth-operations";
import { useAppDispatch, useAppSelector } from "../../helpers/hooks";
import { cartActions } from "../../redux/cart/cart_slice";
import { routes } from "../../routes/config";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { validate } from "../../helpers/validation/loginForm";
import { useTranslation } from "react-i18next";

const { shop } = routes;
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
const initialValues = {
  email: "",
  password: "",
};

export default function SignIn() {
  const [redirectToShop, setRedirectToShop] = useState(false);
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((item) => item.auth.isLoggedIn);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    if (isLoggedIn && redirectToShop) {
      navigate(shop.path, { replace: true });
    }
  }, [isLoggedIn, redirectToShop, navigate]);

  const FieldErrorMessage = ({ fieldName }: { fieldName: string }) => {
    return (
      <ErrorMessage name={fieldName}>
        {(errorMsg) => (
          <Box
            sx={{
              color: Colors.danger,
              fontSize: "14px",
              margin: "0 auto",
            }}
          >
            {errorMsg}
          </Box>
        )}
      </ErrorMessage>
    );
  };
  const onSubmit = (
    values: FormValues,
    { setSubmitting, resetForm }: FormikHelpers<FormValues>
  ) => {
    dispatch(cartActions.resetToInitialState());
    dispatch(operations.logIn(values));
    resetForm();
    setSubmitting(false);
    setRedirectToShop(true);
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
          {t("login")}
        </Typography>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validate={validate}
        >
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
              <FieldErrorMessage fieldName="email" />
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
              <FieldErrorMessage fieldName="password" />
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
