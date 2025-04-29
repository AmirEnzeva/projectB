import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Typography,
  keyframes,
} from "@mui/material";
import logo from "../../../assets/banana.svg";
import { TonConnectButton } from "@tonconnect/ui-react";
import {
  CurrencyBitcoin,
  PeopleAltRounded,
  PlayArrowRounded,
  Telegram,
  Twitter,
} from "@mui/icons-material";
import { YellowC } from "../../../colors/colors";
import PagesLayout from "../../layout/PagesLayout";
import { useState } from "react";

const Home = ({user}) => {

  const [loading, setLoading] = useState(false);

  const borderAnimation = keyframes`
    0% {
      border-color: #FFD700;
    }
    50% {
      border-color: #FFA500;
    }
    100% {
      border-color: #FFD700;
    }
  `;

  const patternAnimation = keyframes`
    0% {
      background-position: 0px 0px;
    }
    100% {
      background-position: 40px 0px;
    }
  `;

  const slideInAnimation = keyframes`
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  `;

  const floatingAnimation = keyframes`
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  `;

  const gradientAnimation = keyframes`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  `;

  const tasks = [
    { icon: <PlayArrowRounded />, title: "Watch Ads & Earn", earn: 400 },
    { icon: <Telegram />, title: "Join telegram Channel", earn: 5000 },
    { icon: <Twitter />, title: "Follow our twitter", earn: 5000 },
    { icon: <CurrencyBitcoin />, title: "make a TON transaction", earn: 10000 },
    { icon: <PeopleAltRounded />, title: "invite 10 friends", earn: 20000 },
    { icon: <PeopleAltRounded />, title: "invite 25 friends", earn: 50000 },
    { icon: <PeopleAltRounded />, title: "invite 50 friends", earn: 100000 },
  ];

  return (
    <PagesLayout>
      <Card
        sx={{
          width: 1,
          height: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "2px solid",
          borderColor: "primary.main",
          animation: `${borderAnimation} 2s infinite`,
          position: "relative",
          background: `repeating-linear-gradient(
            90deg,
            rgba(255, 215, 0, 0.2),
            rgba(255, 215, 0, 0.2) 10px,
            rgba(255, 200, 0, 0.2) 10px,
            rgba(255, 200, 0, 0.2) 20px
          )`,
          backgroundSize: "40px 40px",
          animation: `${borderAnimation} 2s infinite, ${patternAnimation} 3s linear infinite`,
          "&::before": {
            content: '""',
            position: "absolute",
            top: -2,
            left: -2,
            right: -2,
            bottom: -2,
            border: "2px solid",
            borderColor: "primary.main",
            borderRadius: "inherit",
            animation: `${borderAnimation} 2s infinite`,
            animationDelay: "1s",
          },
        }}
      >
        <Typography variant="h6">Banana coin</Typography>
      </Card>

      <Box
        sx={{
          width: 1,
          textAlign: "center",
          mt: 2,
          padding: 2,
          borderRadius: 1,
          background: `linear-gradient(135deg, 
            ${YellowC} 0%, 
            ${YellowC} 5%, 
            rgba(255, 220, 50, 0.95) 10%, 
            rgba(255, 210, 50, 0.92) 15%, 
            rgba(255, 200, 50, 0.9) 20%, 
            rgba(255, 190, 50, 0.88) 25%, 
            rgba(255, 180, 50, 0.85) 30%, 
            rgba(255, 170, 50, 0.82) 35%, 
            rgba(255, 160, 50, 0.8) 40%, 
            rgba(255, 150, 50, 0.78) 45%, 
            rgba(230, 130, 50, 0.75) 50%, 
            rgba(210, 110, 50, 0.72) 55%, 
            rgba(190, 90, 50, 0.7) 60%, 
            rgba(170, 70, 50, 0.68) 65%, 
            rgba(150, 50, 50, 0.65) 70%, 
            rgba(130, 30, 50, 0.62) 75%, 
            rgba(110, 10, 50, 0.6) 80%, 
            rgba(90, 0, 50, 0.58) 85%, 
            rgba(50, 0, 0, 0.7) 90%, 
            rgba(25, 0, 0, 0.8) 95%, 
            rgba(0, 0, 0, 0.9) 100%)`,
          backgroundSize: "200% 200%",
          animation: `${gradientAnimation} 15s ease infinite`,
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(45deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.08) 20%, rgba(255, 255, 255, 0.04) 40%, transparent 70%)",
            zIndex: 0,
          },
          "& > *": {
            position: "relative",
            zIndex: 1,
          },
        }}
      >
        <Box
          component="img"
          src={logo}
          sx={{
            width: 70,
            height: 70,
            animation: `${floatingAnimation} 3s ease-in-out infinite`,
            animationDelay: "0.5s",
          }}
        />
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            animation: `${floatingAnimation} 3s ease-in-out infinite`,
            animationDelay: "0.7s",
          }}
        >
          {user.user.bananas ? user.user.bananas : 0}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            letterSpacing: "2px",
            my: 2,
            animation: `${floatingAnimation} 3s ease-in-out infinite`,
            animationDelay: "0.9s",
          }}
        >
          Banana
        </Typography>
        <TonConnectButton style={{ margin: "auto" }} />
      </Box>
      <Box sx={{ mt: 2 }}>
        <Card sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent>
            <Typography variant="h6" letterSpacing="2px">
              BANANA COMMUNITY
            </Typography>
            <Typography variant="body1" sx={{ color: "lightgray" }}>
              join Banana community channel
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                mt: 1,
                width: 100,
                borderRadius: 20,
              }}
            >
              Join
            </Button>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6" sx={{}}>
          Complete Task & Earn
        </Typography>
        <Box>
          {tasks.length > 0 &&
            tasks.map((task, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: 1,
                  backgroundColor: "black",
                  py: 1,
                  pr: 1,
                  borderRadius: 2,
                  animation: `${slideInAnimation} 0.5s ease-out forwards`,
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <IconButton aria-label={task.title}>{task.icon}</IconButton>
                  <Box>
                    <Typography variant="body1" textTransform="capitalize">
                      {task.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      fontWeight="light"
                      fontSize="13px"
                      color="lightgray"
                    >
                      + {task.earn} Bananas
                    </Typography>
                  </Box>
                </Box>
                <Button
                  variant="outlined"
                  loading={loading}
                  onClick={()=> {
                    setLoading(true);
                    setTimeout(() => {
                      setLoading(false);
                    }, 5000);
                  }}
                  sx={{
                    borderRadius: 20,
                    color: "white",
                    borderColor: "white",
                  }}
                >
                  start
                </Button>
              </Box>
            ))}
        </Box>
      </Box>
    </PagesLayout>
  );
};

export default Home;
