import ClipLoader from "react-spinners/ClipLoader";
import { Box } from "@mui/material";
import { useState } from "react";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const Spinner = () => {
     let [loading, setLoading] = useState(true);
     let [color, setColor] = useState("#ffffff");
  return (
    <Box
      component="div"
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </Box>
  );
};

export default Spinner;
