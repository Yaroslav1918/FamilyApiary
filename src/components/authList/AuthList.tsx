import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import { routes } from "../../routes/config";
import { Colors } from "../../styles";
import { useTranslation } from 'react-i18next';
type AuthListProps = {
    onCloseMenu?: () => void ;
  };
const { signIn, signUp } = routes;
export default function AuthList({ onCloseMenu}: AuthListProps) {
    const { t } = useTranslation();
  return (
    <List sx={{display: "flex", justifyContent: "center", alignItems: "center", padding: 0}}>
  <ListItem sx={{padding: 0}}>
    <ListItemButton component={Link} to={signIn.path} sx={{color: Colors.black, textDecoration: "none", marginRight: "5px", padding: 0, whiteSpace:"nowrap" }}   onClick={onCloseMenu}>
      <ListItemText  primary={`${t('login')} /`} />
    </ListItemButton>
  </ListItem>
  <ListItem sx={{padding: 0}}>
    <ListItemButton component={Link} to={signUp.path} sx={{color: Colors.black, textDecoration: "none", marginRight: "5px", padding: 0, whiteSpace: "nowrap"}}   onClick={onCloseMenu}>
      <ListItemText primary= {t("signUP")} />
    </ListItemButton>
  </ListItem>
</List>
  );
}
