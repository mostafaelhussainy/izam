import "./App.css";
import Layout from "./components/Layout";
import { Box, CssBaseline, ThemeProvider } from "@mui/material/";
import theme from "./theme";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import Sorting from "./components/Sorting";
import RockStarLogo from "./assets/rockstar.png";
import EgabiLogo from "./assets/egabi.png";
import MagaraLogo from "./assets/magara.png";
import JobPosition from "./components/JobPosition";

const jobs = [
  {
    jobTitle: "Gaming UI designer",
    companyLogo: RockStarLogo,
    companyName: "Rockstar Games",
    location: "Mansoura, Egypt",
    date: "10 days ago",
    experienceRange: "0 - 3y of exp",
    rate: "Full time",
    model: "Remote",
    tags: ["Creative / Design", "IT / Software development", "Gaming"],
  },
  {
    jobTitle: "React Frontend developer",
    companyLogo: MagaraLogo,
    companyName: "Magara",
    location: "Cairo, Egypt",
    date: "month ago",
    experienceRange: "5 - 7y of exp",
    rate: "Full time",
    model: "Remote",
    tags: ["Creative / Design", "IT / Software development", "Gaming"],
  },
  {
    jobTitle: "Senior UX UI Designer",
    companyLogo: EgabiLogo,
    companyName: "Egabi",
    location: "Cairo, Egypt",
    date: "10 days ago",
    experienceRange: "0 - 3y of exp",
    rate: "Full time",
    model: "Hybrid",
    tags: ["Creative / Design", "IT / Software development"],
  },
];
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "0 20px",
          }}
        >
          <Sorting />
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {jobs.length === 0
              ? "No jobs at the moment"
              : jobs.map((job, index) => <JobPosition key={index} job={job} />)}
          </Box>
        </Box>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
