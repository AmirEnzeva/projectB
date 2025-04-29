import { Box, keyframes } from "@mui/material";

const PagesLayout = ({children}) => {
  const fadeInAnimation = keyframes`
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      `;
  return (
    <Box
      sx={{
        width: 1,
        height: "100dvh",
        overflowY: "scroll",
        overflowX: "hidden",
        p: 2,
        pb: 10,
        animation: `${fadeInAnimation} 0.8s ease-out forwards`,
      }}
    >
    {children}
    </Box>
  );
};

export default PagesLayout;
