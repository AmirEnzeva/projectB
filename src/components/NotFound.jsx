import { Box, Typography } from "@mui/material";
import { BlackC } from "../colors/colors";

const NotFound = () => {
  return (
    <Box
      sx={{
        width: 1,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor : BlackC
      }}
    >
      <Typography variant="h4" color="whitesmoke">NotFound!!!!!</Typography>
    </Box>
  );
};

export default NotFound;
