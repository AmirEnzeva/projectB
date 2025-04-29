import { ThemeProvider } from "@emotion/react";
import MainLayout from "./components/layout/MainLayout";
import WellcomePage from "./components/pages/singelPages/WellcomePage";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import AcountCheck from "./components/pages/singelPages/AcountCheck";
import NotFound from "./components/NotFound";
import EarnPage from "./components/pages/singelPages/EarnPage";
import theme from "./rootTheme";
import MainPage from "./components/pages/MainPage";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { Box, CssBaseline, Typography } from "@mui/material";
import { UserProvider, useUser } from "./context/userContext";
import { useEffect, useState } from "react";
import { postAndGetUserData } from "./server/Server";
// import { getData, postInitData } from "./server/Server";

// postInitData();
// getData();

let tg = window.Telegram.WebApp;
let initData = tg.initData;
let startParams = tg.initDataUnsafe.start_param;

function App() {
  // const { user } = useUser();


  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const { data } = await postAndGetUserData(initData, startParams);

        setLoading(false);
        console.log(data);
        setUser(data);
      } catch (err) {
        console.log(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(user);

  return (
    <>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          {" "}
          <Typography variant="h4">Loading...</Typography>
        </Box>
      ) : (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <TonConnectUIProvider manifestUrl="https://<YOUR_APP_URL>/tonconnect-manifest.json">
            <MainLayout>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<WellcomePage />} />
                  <Route path="/acountCheck" element={<AcountCheck />} />
                  <Route path="/earnPrise" element={<EarnPage />} />
                  <Route path="/Banana" element={<MainPage user={user} />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </MainLayout>
          </TonConnectUIProvider>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
