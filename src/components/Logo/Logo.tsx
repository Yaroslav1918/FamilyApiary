import HiveIcon from "@mui/icons-material/Hive";
import { Typography } from "@mui/material";
import { SxProps } from "@mui/system";

type LogoProps = {
  sx?: SxProps;
};

export default function Logo({ sx }: LogoProps) {
  return (
    <Typography
      variant="h6"
      component="div"
      sx={{
        ...sx,
        display: "flex",
        alignItems: "baseline",
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
