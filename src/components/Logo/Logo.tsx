import HiveIcon from "@mui/icons-material/Hive";
import { Typography } from "@mui/material";
import { SxProps } from "@mui/system";
import { Link } from "react-router-dom";
import { Colors } from "../../styles";

type LogoProps = {
  sx?: SxProps;
};

export default function Logo({ sx }: LogoProps) {
  return (
    <Typography
      component={Link}
      to ="/"
      sx={{
        ...sx,
        color: Colors.dark,
        display: "flex",
        alignItems: "baseline",
        textDecoration : "none",
        fontFamily: "Great Vibes, cursive",
        fontSize: "30px",
        fontWeight: "600",
      }}
    >
      <HiveIcon />
      Family Apiary
    </Typography>
  );
}
