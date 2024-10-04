import { Avatar, Box, IconButton, TextField } from "@mui/material";
import Logo from "../../assets/izam-logo.svg";
import searchIcon from "../../assets/search.svg";
import homeIcon from "../../assets/home.svg";
import jobsIcon from "../../assets/jobs.svg";
import employersIcon from "../../assets/employers.svg";
import notificationsIcon from "../../assets/notifications.svg";
import messagesIcon from "../../assets/messages.svg";
import arrowDownIcon from "../../assets/arrow-down-filled.svg";
import avatar from "../../assets/avatar.png";

const Header = () => {
  return (
    <Box
      sx={{
        background: "#161616",
        padding: "15px",
      }}
    >
      <Box
        sx={{
          width: "95%",
          maxWidth: "1820px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            columnGap: "20px",
            alignItems: "center",
          }}
        >
          <img src={Logo} alt="Izam logo" width="81" height="27" />
          <TextField
            placeholder="Search by name, job title, ..."
            InputProps={{
              startAdornment: <img src={searchIcon} alt="search" />,
            }}
            sx={{
              width: "400px",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
          }}
        >
          <Box
            sx={{
              display: "flex",
              columnGap: "20px",
              borderRight: "1px solid #D6D6D699",
              paddingRight: "40px",
              marginRight: "40px",
            }}
          >
            <IconButton
              sx={{
                minHeight: "60px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                rowGap: "4px",
                fontSize: "10px",
                color: "#FFF",
              }}
            >
              <img src={homeIcon} width="25" height="25" />
              Home
            </IconButton>
            <IconButton
              sx={{
                minHeight: "60px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                rowGap: "4px",
                fontSize: "10px",
                color: "#FFF",
              }}
            >
              <img src={jobsIcon} width="20" height="20" />
              Jobs
            </IconButton>
            <IconButton
              sx={{
                minHeight: "60px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                rowGap: "4px",
                fontSize: "10px",
                color: "#FFF",
              }}
            >
              <img src={employersIcon} width="25" height="25" />
              Employers
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              columnGap: "20px",
            }}
          >
            <IconButton
              sx={{
                minHeight: "60px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                rowGap: "4px",
                fontSize: "10px",
                color: "#FFF",
              }}
            >
              <img src={notificationsIcon} width="25" height="25" />
              Notifications
            </IconButton>
            <IconButton
              sx={{
                minHeight: "60px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                rowGap: "4px",
                fontSize: "10px",
                color: "#FFF",
              }}
            >
              <img src={messagesIcon} width="20" height="20" />
              Messaging
            </IconButton>
            <IconButton
              sx={{
                minHeight: "60px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                rowGap: "4px",
                fontSize: "10px",
                color: "#FFF",
              }}
            >
              <Avatar
                src={avatar}
                sx={{
                  width: "25px",
                  height: "25px",
                }}
              ></Avatar>
              <Box sx={{ display: "flex", columnGap: "6px", alignItems: "flex-end" }}>
                Profile
                <img
                  src={arrowDownIcon}
                  width="12px"
                  height="18px"
                  style={{
                    position: "relative",
                    transform: "translateY(20%)",
                  }}
                />
              </Box>
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
