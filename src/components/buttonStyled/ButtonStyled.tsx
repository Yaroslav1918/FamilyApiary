import { Colors } from "../../styles";
import { Button } from "@mui/material";
import { SxProps } from "@mui/system";
import { Link } from "react-router-dom";

interface ButtonProps {
  text: string;
  to: string;
  sx?: SxProps;
}

const ButtonStyled = ({ text, to, sx }: ButtonProps) => {
  return (
    <Button
      component={Link}
      to={to}
      sx={{
        ...sx,
        color: Colors.white,
        fontSize: { xs: 13, md: 16,},
        backgroundColor: Colors.warning,
        padding: "10px 37px",
        textDecoration: "none",
        borderRadius: "5px",
        "&:hover": {
          backgroundColor: Colors.warningDark,
        },
      }}
    >
      {text}
    </Button>
  );
};

export default ButtonStyled;
