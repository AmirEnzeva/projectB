import { Box, Button, Typography } from "@mui/material";
import { BlackC } from "../../../colors/colors";
import ProgressLoad from "../../../loadders/ProgressLoad";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const AcountCheck = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  const [number4, setNumber4] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeout(() => {
        setNumber1((oldProgress) => {
          const diff = Math.random() * 10;
          return Math.min(oldProgress + diff, 100);
        });
      }, 0);
      setTimeout(() => {
        setNumber2((oldProgress) => {
          const diff = Math.random() * 10;
          return Math.min(oldProgress + diff, 100);
        });
      }, 1000);
      setTimeout(() => {
        setNumber3((oldProgress) => {
          const diff = Math.random() * 10;
          return Math.min(oldProgress + diff, 100);
        });
      }, 2000);
      setTimeout(() => {
        setNumber4((oldProgress) => {
          const diff = Math.random() * 10;
          return Math.min(oldProgress + diff, 100);
        });
      }, 3000);

      
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box
      sx={{
        width: 1,
        height: "100dvh",
        p: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: BlackC,
      }}
    >
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Checking your acount
      </Typography>

      <Box
        sx={{
          mt: 10,
          display: "flex",
          flexDirection: "column",
          rowGap: 3,
        }}
      >
        <ProgressLoad
          title={"Acount Age verified"}
          value={number1}
          color={number1 >= 100 ? "warning" : ""}
        />
        <ProgressLoad
          title={"Activity Level Analyzed"}
          value={number2}
          color={number2 >= 100 ? "warning" : ""}
        />
        <ProgressLoad
          title={"Telegram Permium Checked"}
          value={number3}
          color={number3 >= 100 ? "warning" : ""}
        />
        <ProgressLoad
          title={"OG Status Confirmed"}
          value={number4}
          color={number4 >= 100 ? "warning" : ""}
        />
      </Box>

      <Button
        variant="contained"
        sx={{ backgroundColor: "primary.main" }}
        disabled={number1 >= 100 && number2 >= 100 && number3 >= 100 && number4 >= 100 ? false : true}
      >
        <NavLink
          to="/earnPrise"
          style={{ color: BlackC, textDecorationLine: "none" }}
        >
          Continu to app
        </NavLink>
      </Button>
    </Box>
  );
};

export default AcountCheck;
