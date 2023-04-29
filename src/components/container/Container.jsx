import { Box } from "@mui/material";

export default function Container({children}) {
  return (
    <Box
      sx={{
        margin: "0 auto",
        padding: "0 15px",
        maxWidth: "1200px",
        width: "100%",
      }}
    >
      {children}
    </Box>
  );
}
