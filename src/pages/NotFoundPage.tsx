import {useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/container/Container";
import { Box, Button } from "@mui/material";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/", { replace: true });
  };

  useEffect(() => {
    navigate("/", { replace: true });
  }, [navigate]);

  return (
    <Box component="section" sx={{ padding: "50px 0" }}>
        <Container>
            <Button type="button" onClick={handleClick}>
       Go back
      </Button>
      <p
        style={{ paddingTop: "20px", paddingBottom: "20px", fontSize: "20px" }}
      >
      </p>
        </Container>
      </Box>
      
  );
};

export default NotFoundPage;
