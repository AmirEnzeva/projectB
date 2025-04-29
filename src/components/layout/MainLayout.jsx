import { Box, Typography } from "@mui/material";
import { BlackC } from "../../colors/colors";



const MainLayout = ({children}) => {
  return (
    <Box className="App " sx={{
        width : {xs : 1 , md : 600 , lg : 600 , xl : 600} ,
        backgroundColor : BlackC,
        margin : '0 auto',
        overflow : 'hidden',
    }}>
        {children}
    </Box>
  );
};

export default MainLayout;
