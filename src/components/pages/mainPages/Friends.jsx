import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { BlackC } from "../../../colors/colors";
import logo from "../../../assets/banana.svg";
import { CopyAllRounded, InfoRounded, Paid } from "@mui/icons-material";
import { keyframes } from "@mui/system";
import PagesLayout from "../../layout/PagesLayout";

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const friends = [
  { username: "theeeraven", bananas: 7500 },
  { username: "bananaKing", bananas: 6200 },
  { username: "fruitLover", bananas: 8900 },
  { username: "monkeyBusiness", bananas: 5400 },
  { username: "bananaSplit", bananas: 7100 },
  { username: "tropicalDream", bananas: 6300 },
  { username: "bananaPeel", bananas: 4800 },
  { username: "fruitNinja", bananas: 8200 },
  { username: "bananaRepublic", bananas: 6900 },
  { username: "sweetTooth", bananas: 5500 },
];

const Friends = () => {
  return (
    <PagesLayout>
      <Typography variant="h5" sx={{ mb: 2, textAlign: "center" }}>
        Invite friends <br /> & get more Bananas
      </Typography>
      <Card>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Box component="img" src={logo} sx={{ width: 50, height: 50 }} />
            <Box>
              <Typography variant="body1"> Invite a friend </Typography>
              <Typography variant="body2">
                {" "}
                get +200 Banana from each friend you invite{" "}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 1,
              mt: 2,
            }}
          >
            <Button variant="contained" sx={{ flexGrow: 3 }}>
              Invite friend
            </Button>
            <Button variant="contained" sx={{ flexGrow: 1 }}>
              {" "}
              <CopyAllRounded /> Copy{" "}
            </Button>
          </Box>
        </CardContent>
      </Card>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            my: 2,
          }}
        >
          <Typography variant="body2">{friends.length} friends</Typography>
          <Typography
            variant="body2"
            sx={{ display: "flex", alignItems: "center" }}
          >
            {friends.length * 200} Bananas <InfoRounded />
          </Typography>
        </Box>

        {friends.length > 0 ? (
          friends.map((friend, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
                p: 2,
                bgcolor: "rgba(255, 255, 255, 0.05)",
                borderRadius: 1,
                animation: `${slideUp} 0.5s ease-out forwards`,
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
                transform: "translateY(50px)",
              }}
            >
              <Box>
                <Typography variant="body1">{friend.username}</Typography>
                <Typography
                  variant="body2"
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <Paid />
                  {friend.bananas}
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ color: "success.main" }}>
                +200
              </Typography>
            </Box>
          ))
        ) : (
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            No friends yet
          </Typography>
        )}
      </Box>
    </PagesLayout>
  );
};

export default Friends;
