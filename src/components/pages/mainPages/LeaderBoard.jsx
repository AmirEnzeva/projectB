import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Button,
} from "@mui/material";
import { BlackC } from "../../../colors/colors";
import PagesLayout from "../../layout/PagesLayout";
import { useUser } from "../../../context/userContext";
import { useState } from "react";

// Sample data for the leaderboard
const leaderboardData = [
  {
    id: 1,
    name: "John Doe",
    score: 2500,
    avatar: "https://mui.com/static/images/avatar/1.jpg",
    tasks: 10,    
  },
  {
    id: 2,
    name: "Jane Smith",
    score: 2300,
    avatar: "https://mui.com/static/images/avatar/2.jpg",
    tasks: 8,
  },
  {
    id: 3,
    name: "Mike Johnson",
    score: 2100,
    avatar: "https://mui.com/static/images/avatar/3.jpg",
    tasks: 12,
  },
  {
    id: 4,
    name: "Sarah Wilson",
    score: 1900,
    avatar: "https://mui.com/static/images/avatar/4.jpg",
    tasks: 15,
  },
  {
    id: 5,
    name: "Tom Brown",
    score: 1700,
    avatar: "https://mui.com/static/images/avatar/5.jpg",
    tasks: 10,
  },
  {
    id: 6,
    name: "amirreza abdollahi",
    score: 8585,
    avatar: "https://mui.com/static/images/avatar/5.jpg",
    tasks: 10,
  },
  {
    id: 7,
    name: "Emma Davis",
    score: 3200,
    avatar: "https://mui.com/static/images/avatar/1.jpg",
    tasks: 10,
  },
  {
    id: 8,
    name: "Alex Turner",
    score: 2800,
    avatar: "https://mui.com/static/images/avatar/2.jpg",
    tasks: 10,
  },
  {
    id: 9,
    name: "Sophie Chen",
    score: 4100,
    avatar: "https://mui.com/static/images/avatar/3.jpg",
    tasks: 10,
  },
  {
    id: 10,
    name: "Lucas Martinez",
    score: 1950,
    avatar: "https://mui.com/static/images/avatar/4.jpg",
    tasks: 10,
  },
  {
    id: 11,
    name: "Isabella Lee",
    score: 3600,
    avatar: "https://mui.com/static/images/avatar/5.jpg",
    tasks: 10,
  },
  {
    id: 12,
    name: "Noah Anderson",
    score: 2900,
    avatar: "https://mui.com/static/images/avatar/1.jpg",
    tasks: 10,
  },
  {
    id: 13,
    name: "Mia Garcia",
    score: 2750,
    avatar: "https://mui.com/static/images/avatar/2.jpg",
    tasks: 10,
  },
  {
    id: 14,
    name: "Ethan Wilson",
    score: 3300,
    avatar: "https://mui.com/static/images/avatar/3.jpg",
    tasks: 10,
  },
  {
    id: 15,
    name: "Olivia Taylor",
    score: 2400,
    avatar: "https://mui.com/static/images/avatar/4.jpg",
    tasks: 10,
  },
  {
    id: 16,
    name: "William Clark",
    score: 1850,
    avatar: "https://mui.com/static/images/avatar/5.jpg",
    tasks: 10,
  },
]; // Sort by score in descending order

// Get only top 15 users

const LeaderBoard = ({user}) => {
  const [filter, setFilter] = useState("score");
  const top15Users = leaderboardData.slice(0, 15).sort((a, b) => filter === "score" ? b.score - a.score : b.tasks - a.tasks); 
  // const { user } = useUser();
  // Current user data (you can replace this with actual user data)
  console.log(user);
  const currentUser = {
    id: 3,
    name: user.user.username,
    score: 2100,
    avatar: user.user.profile_image,
  };

  return (
    <PagesLayout>
      <Typography
        variant="h4"
        sx={{
          color: "white",
          textAlign: "center",
          marginBottom: 4,
          fontWeight: "bold",
        }}
      >
        Leader Board
      </Typography>

      {/* Current User Score Card */}
      <Box
        sx={{
          maxWidth: 1,
          margin: "0 auto 2rem auto",
          padding: 2,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          animation: "slideFromTop 0.5s ease-out",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box
            component="img"
            src={currentUser.avatar}
            alt={currentUser.name}
            sx={{
              width: 60,
              height: 60,
              border: "2px solid gold",
              borderRadius: "50%",
            }}
          />
          <Box>
            <Typography
              variant="body1"
              sx={{ color: "white", fontWeight: "bold" }}
            >
              {currentUser.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "rgba(255, 255, 255, 0.7)" }}
            >
              Your Score: {currentUser.score}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "rgba(255, 215, 0, 0.2)",
            padding: "0.5rem 1rem",
            borderRadius: 1,
            border: "1px solid gold",
          }}
        >
          <Typography
            sx={{ color: "gold", fontWeight: "bold", fontSize: "1.2rem" }}
          >
            Rank #{currentUser.id}
          </Typography>
        </Box>
      </Box>

      {/* Filter Leader Board */}
      <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
        <Button variant="contained" color="primary" onClick={() => setFilter("score")}>
          Score
        </Button>
        <Button variant="contained" color="primary" onClick={() => setFilter("tasks")}>
          Tasks
        </Button>
      </Box>

      {/* Leader Board Table */}

      <TableContainer
        component={Paper}
        sx={{
          maxWidth: 1,
          margin: "0 auto",
          backgroundColor: BlackC,
          overflow: "hidden",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                sx={{
                  fontWeight: "bold",
                  color: "white",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                  animation: "slideFromLeft 0.5s ease-out",
                }}
              >
                Rank
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontWeight: "bold",
                  color: "white",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                  animation: "slideFromTop 0.5s ease-out",
                }}
              >
                Player
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontWeight: "bold",
                  color: "white",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                  animation: "slideFromRight 0.5s ease-out",
                }}
              >
                Score
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {top15Users.map((player, index) => (
              <TableRow
                key={player.id}
                sx={{
                  "&:nth-of-type(odd)": {
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                  },
                  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                  backgroundColor:
                    player.id === currentUser.id
                      ? "rgba(255, 215, 0, 0.1)"
                      : "inherit",
                }}
              >
                <TableCell
                  align="center"
                  sx={{
                    color: "white",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                    animation: `slideFromLeft 0.5s ease-out ${index * 0.1}s`,
                    opacity: 0,
                    animationFillMode: "forwards",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: index < 3 ? "bold" : "normal",
                      color:
                        index === 0
                          ? "gold"
                          : index === 1
                          ? "silver"
                          : index === 2
                          ? "#cd7f32"
                          : "white",
                    }}
                  >
                    #{index + 1}
                  </Typography>
                </TableCell>
                <TableCell
                  sx={{
                    color: "white",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                    animation: `slideFromTop 0.5s ease-out ${index * 0.1}s`,
                    opacity: 0,
                    animationFillMode: "forwards",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar src={player.avatar} alt={player.name} />
                    <Typography variant="body2" sx={{ color: "white" }}>
                      {player.name}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "white",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                    animation: `slideFromRight 0.5s ease-out ${index * 0.1}s`,
                    opacity: 0,
                    animationFillMode: "forwards",
                  }}
                >
                  <Typography sx={{ color: "white" }}>
                    {player.score}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <style>
        {`
          @keyframes slideFromLeft {
            from {
              transform: translateX(-100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          @keyframes slideFromRight {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          @keyframes slideFromTop {
            from {
              transform: translateY(-100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </PagesLayout>
  );
};

export default LeaderBoard;
