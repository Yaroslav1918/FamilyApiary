import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from "formik";
import "react-app-polyfill/ie11";
import Container from "../container/Container";
import { Colors } from "../../styles";
import { useAppSelector, useAppDispatch } from "../../helpers/hooks";
import operations from "../../redux/auth/auth-operations";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { routes } from "../../routes/config";
import { validate } from "../../helpers/validation/registrationForm";
import { useEffect } from "react";
import GoogleLoginButton from "../googleLoginButton/googleLoginButton";
import { getIsLoggedIn, getIsToken } from "../../redux/auth/auth-selectors";
const { signIn, shop } = routes;

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
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const isLoggedIn = useAppSelector(getIsLoggedIn);
  const token = useAppSelector(getIsToken);

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  useEffect(() => {
    if (isLoggedIn && token) {
      navigate(shop.path, { replace: true });
    } else if (isLoggedIn) {
      navigate(signIn.path, { replace: true });
    }
  }, [isLoggedIn, navigate, token]);

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
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validate={validate}
        >
          {({ isSubmitting }) => (
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
              <FieldErrorMessage fieldName="name" />
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
              <FieldErrorMessage fieldName="email" />
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
              <FieldErrorMessage fieldName="password" />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                sx={{ marginTop: "16px", background: Colors.muted }}
              >
                {isSubmitting ? t("submitting") : t("submit")}
              </Button>
              <GoogleLoginButton />
            </Form>
          )}
        </Formik>
      </Container>
    </Box>
  );
}
