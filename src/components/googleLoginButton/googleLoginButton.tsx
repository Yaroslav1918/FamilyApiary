import { useGoogleLogin } from "@react-oauth/google";
import operations from "../../redux/auth/auth-operations";
import { useAppDispatch } from "../../helpers/hooks";
import { Button } from "@mui/material";
import { Colors } from "../../styles";
import GoogleIcon from "@mui/icons-material/Google";
import requestToGoogle from "../../helpers/requestToGoogle";
import { useTranslation } from "react-i18next";

export default function GoogleLoginButton() {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await requestToGoogle(response);
        dispatch(operations.googleLogin(res));
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{
          marginTop: "16px",
          background: Colors.googleBack,
          color: Colors.white,
        }}
        onClick={() => login()}
      >
        <GoogleIcon sx={{ marginRight: "5px" }} />
        {t("googleLogin")}
      </Button>
    </>
  );
}
