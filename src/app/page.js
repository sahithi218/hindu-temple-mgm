"use client";

import { Box } from "@mui/material";
import WelcomeSection from "../components/WelcomeSection";
import DeitiesSection from "../components/DeitiesSection";
import UpcomingEvents from "../components/UpcomingEvents";
import EventIcon from "@mui/icons-material/Event";
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      <WelcomeSection />
      <UpcomingEvents />
      <DeitiesSection />
      
      

      {/* Featured Content */}
      <Box sx={{ py: 8, px: { xs: 2, md: 4 }, bgcolor: "background.paper" }}>
        <Grid container spacing={4}>
          {/* <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image="/images/UpcomingEvents.png"
                alt="Temple Events"
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Upcoming Events
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Join us for various cultural and religious events throughout
                  the year.
                </Typography>
                <Button href="/events" sx={{ mt: 2 }}>
                  View Events
                </Button>
              </CardContent>
            </Card>
            
          </Grid> */}
          

          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image="/images/Services.png"
                alt="Temple Services"
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Temple Services
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Explore our regular pujas, ceremonies, and spiritual services.
                </Typography>
                <Button href="/services" sx={{ mt: 2 }}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image="/images/Donation.jpg"
                alt="Support the Temple"
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Support Our Temple
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Help us maintain and grow our temple community through your
                  generous donations.
                </Typography>
                <Button href="/donate" sx={{ mt: 2 }}>
                  Donate Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Temple Timings Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #f5f7fa 0%, #e8edf5 100%)",
          py: 8,
          px: { xs: 2, md: 4 },
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background:
              "linear-gradient(90deg, rgba(232,93,4,0) 0%, rgba(232,93,4,0.3) 50%, rgba(232,93,4,0) 100%)",
          },
        }}
      >
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            mb: 6,
            fontWeight: 700,
            background: "linear-gradient(45deg,rgb(12, 13, 14) 30%,rgb(12, 13, 14) 30%)",            
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          Daily Puja & Aarti Schedule
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                background: "white",
                borderRadius: 2,
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                overflow: "hidden",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                },
              }}
            >
              <Box
                sx={{
                  p: 3,
                  background:
                    "linear-gradient(135deg, #E85D04 0%, #F48C06 100%)",
                  color: "white",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 600, letterSpacing: 0.5 }}
                >
                  Morning Puja & Aarti
                </Typography>
              </Box>
              <Box sx={{ p: 3 }}>
                {[
                  // {
                  //   time: "6:30 AM",
                  //   event: "Suprabhatam & Vishnu Sahasranama",
                  // },
                  // { time: "7:00 AM", event: "Morning Aarti" },
                  { time: "9:00 AM", event: "Aarti" },
                  // { time: "11:30 AM", event: "Afternoon Aarti" },
                ].map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      mb: index !== 3 ? 2 : 0,
                      display: "flex",
                      alignItems: "center",
                      "&:hover": {
                        transform: "translateX(5px)",
                        transition: "transform 0.2s ease-in-out",
                      },
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 600,
                        color: "#E85D04",
                        minWidth: "85px",
                      }}
                    >
                      {item.time}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#2B3A67" }}>
                      {item.event}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box
              sx={{
                background: "white",
                borderRadius: 2,
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                overflow: "hidden",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                },
              }}
            >
              <Box
                sx={{
                  p: 3,
                  background:
                    "linear-gradient(135deg, #E85D04 0%, #F48C06 100%)",
                  color: "white",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 600, letterSpacing: 0.5 }}
                >
                  Evening Puja & Aarti
                </Typography>
              </Box>
              <Box sx={{ p: 3 }}>
                {[
                  // { time: "4:30 PM", event: "Evening Puja" },
                  // { time: "6:00 PM", event: "Sandhya Aarti" },
                  { time: "7:00 PM", event: "Aarti" },
                ].map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      mb: index !== 2 ? 2 : 0,
                      display: "flex",
                      alignItems: "center",
                      "&:hover": {
                        transform: "translateX(5px)",
                        transition: "transform 0.2s ease-in-out",
                      },
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 600,
                        color: "#E85D04",
                        minWidth: "85px",
                      }}
                    >
                      {item.time}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#2B3A67" }}>
                      {item.event}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box
              sx={{
                mt: 4,
                textAlign: "center",
                p: 3,
                borderRadius: 2,
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 15px rgba(0,0,0,0.03)",
              }}
            >
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  fontStyle: "italic",
                  "& span": {
                    color: "#E85D04",
                    fontWeight: 500,
                  },
                }}
              >
                <span>*</span> Special pujas and aartis are performed during
                festivals and special occasions.
                <br />
                <span>*</span> For private puja bookings, please contact the
                temple office.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
