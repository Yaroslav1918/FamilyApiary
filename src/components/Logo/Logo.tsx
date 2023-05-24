import HiveIcon from "@mui/icons-material/Hive";
import { Typography } from "@mui/material";
import { SxProps } from "@mui/system";
import { Link } from "react-router-dom";
import { Colors } from "../../styles";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next'
type LogoProps = {
  sx?: SxProps;
};

export default function Logo({ sx }: LogoProps) {
  const { t } = useTranslation();

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
        fontSize: i18next.language === "uk" ? "20px": "30px",
        fontWeight: "600",
      }}
    >
      <HiveIcon />
     {t("logo")}
    </Typography>
  );
}
