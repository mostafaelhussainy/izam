import { Box } from "@mui/material";
import Header from "./Header";
import SideNav from "./SideNav";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        background: "#F7F7F7",
      }}
    >
      <Header />
      <Box sx={{ display: "flex", width: "95%", maxWidth: "1820px", margin: "0 auto" }}>
        <SideNav />
        <Box
          component="main"
          sx={{
            width: "100%",
            padding: "40px 0",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
