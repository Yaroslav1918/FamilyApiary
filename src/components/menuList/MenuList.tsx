import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { routes } from "../../routes/config";
import { useState } from "react";

interface MenuListProps {
  item: string;
  options: string[];
  onClick?: () => void;
}

export default function MenuList({ item, options, onClick }: MenuListProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    onClick?.();
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        key={item}
        sx={{ color: "inherit", fontSize: { xs: "14px", lg: "16px" } }}
      >
        {item}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
    
      >
        {options.map((option: string) => (
          <MenuItem
            key={option}
            sx={{ color: "inherit", fontSize: "18px" }}
            component={Link}
            onClick={handleClose}
            to={
              Object.values(routes).some((route) => route.titleEn === option || route.titleUk === option )
            
                ? Object.values(routes).find((route) => route.titleEn === option || route.titleUk === option)
                    ?.path || "/"
                : "/"
            }
            disableRipple 
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
