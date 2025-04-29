import { Box, Tab, Tabs } from "@mui/material";
import { BlackC } from "../../colors/colors";
import {
  HomeRounded,
  LeaderboardRounded,
  PeopleAltRounded,
} from "@mui/icons-material";
import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import Home from "./mainPages/Home";
import LeaderBoard from "./mainPages/LeaderBoard";
import Friends from "./mainPages/Friends";

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

const MainPage = ({user}) => {
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
    <Box
      sx={{
        width: 1,
        height: "100dvh",
        position: "relative",
        backgroundColor: BlackC,
      }}
    >
      <Tabs
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "black",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          zIndex : 999
        }}
      >
        <Tab label={"HOME"} icon={<HomeRounded />} sx={{ fontSize: 11 }} />
        <Tab
          label={"Leaderboard"}
          icon={<LeaderboardRounded />}
          sx={{ fontSize: 11 }}
        />
        <Tab
          label={"Friends"}
          icon={<PeopleAltRounded />}
          sx={{ fontSize: 11 }}
        />
      </Tabs>

      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        <CustomePanel index={0} value={value}>
          <Home user={user}/>          
        </CustomePanel>
        <CustomePanel index={1} value={value}>
          <LeaderBoard user={user} />
        </CustomePanel>
        <CustomePanel index={2} value={value}>
          <Friends/>
        </CustomePanel>
      </SwipeableViews>
    </Box>
  );
};

export default MainPage;
