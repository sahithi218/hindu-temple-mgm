"use client";

import { useState } from "react";
import moment from "moment";
import { Box, Typography, Card, Tabs, Tab, Chip, Divider } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CelebrationIcon from "@mui/icons-material/Celebration";
import EventIcon from "@mui/icons-material/Event";
import PageHero from "@/components/Layout/PageHero";

const festivals = [
  { date: "January 14, Sunday", festival: "Makar Sankranti" },
  { date: "January 25, Thursday", festival: "Shakambhari Navratri Poornima" },
  { date: "February 13, Tuesday", festival: "Vasant Panchami" },
  { date: "March 8, Friday", festival: "Maha Shivratri" },
  { date: "March 24, Sunday", festival: "Holi" },
  {
    date: "March 25, Monday",
    festival: "Penumbral Lunar Eclipse (Not to follow)",
  },
  { date: "April 8, Monday", festival: "Partial Solar Eclipse" },
  {
    date: "April 9, Tuesday",
    festival: "Chaitra Navratri, Gudi Padwa, Yugadi",
  },
  { date: "April 16, Tuesday", festival: "Ram Navmi" },
  { date: "April 23, Tuesday", festival: "Hanuman Janmotsav" },
  { date: "June 9, Sunday", festival: "Temple Fifth Anniversary" },
  { date: "June 21, Friday", festival: "Vat Savitri Vrat Poornima Puja" },
  { date: "July 7, Sunday", festival: "Bhagwan Jagannath Rath Yatra" },
  { date: "July 20, Saturday", festival: "Guru Poornima" },
  {
    date: "August 5, Monday to September 2, Monday",
    festival: "Shravan Month",
  },
  {
    date: "September 2, Monday",
    festival: "Shravan Month Last Day, Laghu Rudra Shiva Havan",
  },
  {
    date: "August 5, 12, 19, 26; September 2",
    festival: "Shravan Month Mondays",
  },
  { date: "August 19, Monday", festival: "Rakshabandhan" },
  { date: "August 25, Sunday", festival: "Janmashtami" },
  {
    date: "September 6, Friday to September 16, Monday",
    festival: "Ganesh Utsav Celibratition",
  },
  { date: "September 14, Saturday", festival: "Ganesh 108 Ladoo Havan" },
  { date: "September 17, Tuesday", festival: "Partial Lunar Eclipse" },
  {
    date: "September 17, Tuesday to October 2, Wednesday",
    festival: "Sharaddha Pitru Paksha",
  },
  { date: "October 3, Thursday", festival: "Ashvin (Asho) Navratri First Day" },
  { date: "October 10, Thursday", festival: "Durga Asthami Havan" },
  { date: "October 12, Saturday", festival: "Dashera (Ravan Dahan)" },
  { date: "October 16, Wednesday", festival: "Sharad Poornima" },
  { date: "October 29, Tuesday", festival: "Dhanterash" },
  {
    date: "October 30, Wednesday",
    festival: "Kali Chaudash (Hanumanji Havan)",
  },
  {
    date: "October 31, Thursday",
    festival: "Diwali, Saraswati Puja For Children, Fire Works",
  },
  {
    date: "November 2, Saturday",
    festival: "Hindu Gujarati New Year, Chopda Pujan, Annakut & Govardhanpuja",
  },
  {
    date: "November 15, Friday / November 11, Monday",
    festival: "Tulsi Vivah",
  },
  { date: "December 14, Saturday", festival: "Bhagwan Dattatreya Jayanti" },
];

// Group festivals by month
const groupedFestivals = festivals.reduce((acc, festival) => {
  const month = festival.date.split(" ")[0];
  if (!acc[month]) {
    acc[month] = [];
  }
  acc[month].push(festival);
  return acc;
}, {});

const monthOrder = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const sortedMonths = Object.keys(groupedFestivals).sort(
  (a, b) => monthOrder.indexOf(a) - monthOrder.indexOf(b)
);

export default function CalendarPage() {
  const [currentMonth, setCurrentMonth] = useState(() => {
    const currentMonthName = moment().format("MMMM");
    console.log("Current month from Moment:", currentMonthName);

    // Check if current month has festivals
    if (sortedMonths.includes(currentMonthName)) {
      console.log("Using current month:", currentMonthName);
      return currentMonthName;
    }

    // Find the next month with festivals
    const currentMonthIndex = monthOrder.indexOf(currentMonthName);
    const nextMonthWithFestivals = sortedMonths.find(
      (month) => monthOrder.indexOf(month) >= currentMonthIndex
    );

    if (nextMonthWithFestivals) {
      console.log("Using next month with festivals:", nextMonthWithFestivals);
      return nextMonthWithFestivals;
    }

    // If no future months have festivals, use the first month
    console.log("Falling back to first month:", sortedMonths[0]);
    return sortedMonths[0];
  });

  const handleMonthChange = (event, newMonth) => {
    setCurrentMonth(newMonth);
  };

  return (
    <Box>
      <PageHero title="Festival Calendar" icon={EventIcon} />

      {/* Calendar Content */}
      <Box
        sx={{
          maxWidth: "lg",
          mx: "auto",
          py: 6,
          px: { xs: 2, md: 4 },
        }}
      >
        {/* Month Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 4 }}>
          <Tabs
            value={currentMonth}
            onChange={handleMonthChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{
              "& .MuiTab-root": {
                minWidth: "auto",
                px: 3,
                py: 2,
                color: "text.secondary",
                "&.Mui-selected": {
                  color: "#E85D04",
                },
              },
              "& .MuiTabs-indicator": {
                backgroundColor: "#E85D04",
              },
            }}
          >
            {sortedMonths.map((month) => (
              <Tab
                key={month}
                label={
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <CalendarMonthIcon sx={{ fontSize: 20 }} />
                    <span>{month}</span>
                    <Chip
                      label={groupedFestivals[month].length}
                      size="small"
                      sx={{
                        ml: 1,
                        bgcolor:
                          currentMonth === month ? "#E85D04" : "grey.200",
                        color:
                          currentMonth === month ? "white" : "text.secondary",
                        height: 20,
                        "& .MuiChip-label": {
                          px: 1,
                          fontSize: "0.75rem",
                        },
                      }}
                    />
                  </Box>
                }
                value={month}
              />
            ))}
          </Tabs>
        </Box>

        {/* Festival Cards */}
        <Box>
          {groupedFestivals[currentMonth].map((festival, index) => (
            <Card
              key={index}
              sx={{
                mb: 3,
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "none",
                bgcolor: "background.paper",
                border: "1px solid",
                borderColor: "divider",
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
                  borderColor: "#E85D04",
                },
              }}
            >
              <Box
                sx={{
                  p: { xs: 2, sm: 3 },
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 3,
                }}
              >
                {/* Date Section */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    minWidth: { xs: "90px", sm: "120px" },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#E85D04",
                      fontWeight: 600,
                      fontSize: { xs: "1rem", sm: "1.1rem" },
                      mb: 0.5,
                    }}
                  >
                    {festival.date.split(" ")[0]}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <CalendarMonthIcon
                      sx={{
                        fontSize: "1rem",
                        color: "text.secondary",
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        fontSize: { xs: "0.875rem", sm: "0.9rem" },
                      }}
                    >
                      {festival.date.split(" ")[1].replace(",", "")}
                    </Typography>
                  </Box>
                </Box>

                {/* Festival Details */}
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: "text.primary",
                      fontSize: { xs: "1rem", sm: "1.1rem" },
                      mb: 1,
                    }}
                  >
                    {festival.festival}
                  </Typography>
                  {festival.festival.includes("(") && (
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        fontSize: { xs: "0.875rem", sm: "0.9rem" },
                        fontStyle: "italic",
                      }}
                    >
                      {festival.festival.match(/\((.*?)\)/)[1]}
                    </Typography>
                  )}
                </Box>

                {/* Icon */}
                <Box
                  sx={{
                    display: { xs: "none", sm: "flex" },
                    alignItems: "center",
                    justifyContent: "center",
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    bgcolor: "rgba(232, 93, 4, 0.1)",
                  }}
                >
                  <CelebrationIcon
                    sx={{
                      color: "#E85D04",
                      fontSize: "1.25rem",
                    }}
                  />
                </Box>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
