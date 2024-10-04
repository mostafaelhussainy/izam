import { Box, Typography } from "@mui/material";
import locationIcon from "../../assets/location.svg";
import dateIcon from "../../assets/date.svg";
const JobPosition = ({
  job,
}: {
  job: {
    jobTitle: string;
    companyLogo: string;
    companyName: string;
    location: string;
    date: string;
    experienceRange: string;
    rate: string;
    model: string;
    tags: string[];
  };
}) => {
  const { jobTitle, companyLogo, companyName, location, date, experienceRange, rate, model, tags } = job;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        background: "#FFF",
        borderRadius: "5px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "15px 20px",
          borderBottom: "1px solid #F7F7F7",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              columnGap: "10px",
            }}
          >
            <img src={companyLogo} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: "10px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "25px",
                  color: "#161616",
                  fontWeight: 500,
                }}
              >
                {jobTitle}
              </Typography>
              <Typography
                sx={{
                  fontSize: "17px",
                  color: "#14A077",
                  fontWeight: 700,
                  lineHeight: "24px",
                }}
              >
                {companyName}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", columnGap: "6px", alignItems: "center" }}>
            <Typography
              sx={{
                fontSize: "17px",
                color: "#707070",
                fontWeight: 400,
                display: "flex",
                columnGap: "4px",
                alignItems: "center",
              }}
            >
              <img src={locationIcon} />
              {location}
            </Typography>
            <Typography
              sx={{
                fontSize: "17px",
                color: "#707070",
                fontWeight: 400,
                display: "flex",
                columnGap: "4px",
                alignItems: "center",
              }}
            >
              <img src={dateIcon} />
              {date}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", columnGap: "5px", alignItems: "center" }}>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#707070",
                fontWeight: 500,
                display: "flex",
                columnGap: "4px",
                alignItems: "center",
                padding: "5px 15px",
                background: "#F7F7F7",
              }}
            >
              {experienceRange}
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#707070",
                fontWeight: 500,
                display: "flex",
                columnGap: "4px",
                alignItems: "center",
                padding: "5px 15px",
                background: "#F7F7F7",
              }}
            >
              {rate}
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#707070",
                fontWeight: 500,
                display: "flex",
                columnGap: "4px",
                alignItems: "center",
                padding: "5px 15px",
                background: "#F7F7F7",
              }}
            >
              {model}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Typography
        sx={{
          padding: "15px 20px",
          fontSize: "17px",
          color: "#707070",
          fontWeight: 400,
        }}
      >
        {tags.map((tag, idx) => (idx == 0 ? `${tag}` : ` - ${tag}`))}
      </Typography>
    </Box>
  );
};

export default JobPosition;
