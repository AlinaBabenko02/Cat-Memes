import { Box, CircularProgress } from "@mui/material";

export const Loader = () => (
  <Box
    sx={{
      display: "flex",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <CircularProgress size="30vw" />
  </Box>
);
