import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../../../assets/banana.svg";

import {
  Box,
  Typography,
  Button,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material";
import { BlackC, YellowC } from "../../../colors/colors";

import {
  CloseRounded,
  MoreHorizRounded,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";


const WellcomePage = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <Box
        sx={{
          height: "100dvh",
          width: 1,
          backgroundColor: BlackC,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button size="medium" variant="text" sx={{ color: "whitesmoke" }}>
            <CloseRounded fontSize="medium" />
          </Button>
          <Typography
            variant="h6"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            Banana
            <Avatar src={logo} sx={{ width: 30, height: 30 }} />
          </Typography>
          <Button
            size="medium"
            variant="text"
            sx={{ color: "whitesmoke" }}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreHorizRounded fontSize="medium" />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Box>

        <Box>
          <motion.img
            component="img"
            style={{
              height: "200px",
              width: "100%",
            }}
            alt="The house from the offer."
            src={logo}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          />
        </Box>

        <Typography variant="body1" sx={{ textAlign: "center" }}>
          👋 Hey ! <br />
          <span style={{ color: YellowC, textShadow: `0 0 5px ${YellowC}` }}>
            Banana
          </span>{" "}
          has some present 🎉
          <br /> for your Telegram account
        </Typography>

        <Button
          whileTap={{ scale: 0.95 }}
          variant="contained"
          sx={{ backgroundColor: "primary.main", margin: 3 }}
        >
          <NavLink
            to="/acountCheck"
            style={{ textDecorationLine: "none", color: BlackC }}
          >
            No way lets see!!
          </NavLink>
        </Button>
      </Box>
  );
};

export default WellcomePage;
