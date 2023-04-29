import { Box, Link } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import styled from "@emotion/styled";
import { Colors } from "../../styles";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

const SocialLink = styled(Link)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 40,
  height: 40,
  borderRadius: "50%",
  backgroundColor: Colors.danger,
  transition: "background-color 0.2s ease-in-out",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: Colors.dangerDark,
  },
  "&:not(:last-child)": {
    marginRight: 9,
  },
});

type SocialListProps = {
  sx?: SxProps<Theme>;
};

export default function SocialList({ sx }: SocialListProps) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 2, ...sx }}>
      <SocialLink>
        <Facebook style={{ fontSize: 25, color: "white" }} />
      </SocialLink>
      <SocialLink>
        <Twitter style={{ fontSize: 25, color: "white" }} />
      </SocialLink>
      <SocialLink>
        <Instagram style={{ fontSize: 25, color: "white" }} />
      </SocialLink>
    </Box>
  );
};
