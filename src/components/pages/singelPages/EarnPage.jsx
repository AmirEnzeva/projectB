import {
  Box,
  Button,
  Tab,
  Tabs,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { BlackC } from "../../../colors/colors";
import { useState } from "react";
import theme from "../../../rootTheme";
import logoImg from "../../../assets/banana.svg";
import SwipeableViews from "react-swipeable-views";
import { NavLink } from "react-router-dom";
import CountUp from "react-countup";

const CustomePanel = (props) => {
  let { children, index, value, ...others } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...others}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

const EarnPage = () => {
  const [value, setValue] = useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: 1, height: "100dvh", backgroundColor: BlackC }}>
        <Tabs value={value} onChange={handleChange} sx={{ px: 2 }}>
          <Tab label={"____"} {...a11yProps(0)} sx={{ width: 0.5 }} />
          <Tab label={"____"} {...a11yProps(1)} sx={{ width: 0.5 }} />
        </Tabs>

        <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
          <CustomePanel index={0} value={value} style={{ height: "100%" }}>
            <Box
              sx={{
                width: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: 2,
              }}
            >
              <Typography variant="h4" sx={{ mb: 2 }}>
                Awsome score!
              </Typography>
              <Typography variant="body1">You have joined Telegram</Typography>
              <Box
                sx={{
                  width: 1,
                  height: 300,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h1"
                  sx={{ textAlign: "center", fontWeight: "bold" }}
                >
                  1
                </Typography>
                <Typography variant="h4">year ago</Typography>
              </Box>
              <Box>
                <Typography variant="body1" sx={{ textAlign: "center", mb: 3 }}>
                  your Telegram number is #666000666 <br /> you are in the Top
                  85% Telegram users 🔥{" "}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "white",
                    color: BlackC,
                    width: "100%",
                  }}
                >
                  <NavLink to="/Banana">Continue</NavLink>
                </Button>
              </Box>
            </Box>
          </CustomePanel>
          <CustomePanel index={1} value={value}>
            <Box
              sx={{
                width: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                p: 2,
              }}
            >
              <Typography variant="h4">You are amazing!</Typography>
              <Typography variant="body1">
                Here is your Bananas reward
              </Typography>
              <Box
                sx={{
                  width: 1,
                  height: 400,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  component={"img"}
                  src={logoImg}
                  sx={{ width: 200, height: 200 }}
                />
                <Typography variant="h5" sx={{ textAlign: "center", mt: 5 }}>
                  <CountUp start={0} end={853} duration={5} />
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1">
                  TNX for your time on Telegram 🤝
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "white",
                    color: BlackC,
                    width: "100%",
                    mt: 2,
                  }}
                >
                  <NavLink to="/Banana">Continue</NavLink>
                </Button>
              </Box>
            </Box>
          </CustomePanel>
        </SwipeableViews>
      </Box>
    </ThemeProvider>
  );
};

export default EarnPage;
