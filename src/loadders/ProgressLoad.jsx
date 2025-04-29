import { CheckCircleOutlineRounded } from "@mui/icons-material";
import { Box, LinearProgress, Typography } from "@mui/material";


const ProgressLoad = ({ title, value, color }) => {


  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body1">{title}</Typography>
        <CheckCircleOutlineRounded sx={{transition : '250ms ease'}}  color={color} />
      </Box>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{ height: 5, borderRadius: 5 }}
        color="primary"
      ></LinearProgress>
    </>
  );
};

export default ProgressLoad;
