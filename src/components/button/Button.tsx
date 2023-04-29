import { Colors } from "../../styles";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import { SxProps } from "@mui/system";
import { styled } from "@mui/material/styles";

const StyledButton = styled(MuiButton)({
  color: Colors.white,
  backgroundColor: Colors.warning,
  padding: "10px 37px",
  textDecoration: "none",
  borderRadius: "5px",
  "&:hover": {
    backgroundColor: Colors.warningDark,
  },
});
interface ButtonProps extends Omit<MuiButtonProps, "sx"> {
  text: string;
  sx?: SxProps;
}
const Button = ({ text, sx }: ButtonProps) => {
  return <StyledButton sx={sx}>{text}</StyledButton>;
};

export default Button;
