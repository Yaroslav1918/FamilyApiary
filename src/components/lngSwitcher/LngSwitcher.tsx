import { useTranslation } from "react-i18next";
import { Box, MenuItem, Menu } from "@mui/material";
import { useState } from "react";
import i18next from "i18next";
import { Colors } from "../../styles";
type Language = {
  nativeName: string;
};

type Languages = Record<string, Language>;

const lngs: Languages = {
  en: { nativeName: "EN" },
  uk: { nativeName: "UK" },
};

const LngSwitcher = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [language, setLanguage] = useState(i18next.language);

  const handleOpenMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (lng: string) => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
    handleCloseMenu();
  };

  return (
    <>
      <Box
        onClick={handleOpenMenu}
        sx={{ marginRight: "20px", cursor: "pointer" }}
      >
        {language.toUpperCase()}
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        {Object.keys(lngs).map((lng) => (
          <MenuItem
            key={lng}
            onClick={() => handleLanguageChange(lng)}
            sx={{ backgroundColor: language === lng ? Colors.orange : "none" }}
          >
            {lngs[lng].nativeName}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LngSwitcher;
