"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  IconButton,
} from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PageHero from "@/components/Layout/PageHero";

const events = [
  {
    id: 1,
    title: "Ganesh Chaturthi Celebrations",
    date: "September 6-16, 2024",
    time: "6:00 AM - 8:00 PM",
    location: "Main Temple Hall",
    description:
      "Join us for the 10-day celebration of Lord Ganesha's birthday with daily pujas, cultural programs, and prasadam distribution. Special events include Ganesh Abhishekam and 108 Modak offerings.",
    image: "/images/events/ganesh-chaturthi.jpg",
    category: "Festival",
  },
  {
    id: 2,
    title: "Diwali Cultural Night",
    date: "October 31, 2024",
    time: "5:00 PM - 10:00 PM",
    location: "Temple Auditorium",
    description:
      "Celebrate the festival of lights with an evening of cultural performances, traditional dances, and music. Enjoy special Lakshmi Puja followed by grand fireworks display.",
    image: "/images/events/diwali.jpg",
    category: "Cultural",
  },
  {
    id: 3,
    title: "Temple Anniversary Celebration",
    date: "June 9, 2024",
    time: "9:00 AM - 9:00 PM",
    location: "Temple Complex",
    description:
      "Join us in celebrating our temple's fifth anniversary with special pujas, community lunch (Annadanam), cultural programs, and evening concert. All devotees are welcome.",
    image: "/images/events/anniversary.jpg",
    category: "Special",
  },
  {
    id: 4,
    title: "Vedic Chanting Workshop",
    date: "Every Saturday",
    time: "8:00 AM - 10:00 AM",
    location: "Learning Center",
    description:
      "Learn traditional Vedic chanting and Sanskrit verses in this weekly workshop. Open to all age groups. Prior registration required.",
    image: "/images/events/vedic.jpg",
    category: "Workshop",
  },
];

export default function EventsPage() {
  return (
    <Box>
      <PageHero title="Temple Events" icon={EventIcon} />

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Introduction */}
        <Box sx={{ mb: 6, textAlign: "center" }}>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              color: "text.primary",
              fontWeight: 600,
            }}
          >
            Upcoming Events & Celebrations
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            Join us in celebrating our rich cultural heritage through various
            events and festivals. From traditional pujas to cultural programs,
            there's something for everyone in our community.
          </Typography>
        </Box>

        {/* Events Grid */}
        <Grid container spacing={4}>
          {events.map((event) => (
            <Grid item xs={12} md={6} key={event.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 2,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    height: 240,
                    bgcolor: "grey.100",
                    position: "relative",
                  }}
                >
                  <Chip
                    label={event.category}
                    sx={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      bgcolor: "#E85D04",
                      color: "white",
                      fontWeight: 500,
                    }}
                  />
                </CardMedia>

                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: "text.primary",
                    }}
                  >
                    {event.title}
                  </Typography>

                  <Box sx={{ mb: 2 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 1,
                        color: "text.secondary",
                      }}
                    >
                      <EventIcon
                        sx={{ fontSize: 20, mr: 1, color: "#E85D04" }}
                      />
                      <Typography variant="body2">{event.date}</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 1,
                        color: "text.secondary",
                      }}
                    >
                      <AccessTimeIcon
                        sx={{ fontSize: 20, mr: 1, color: "#E85D04" }}
                      />
                      <Typography variant="body2">{event.time}</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "text.secondary",
                      }}
                    >
                      <LocationOnIcon
                        sx={{ fontSize: 20, mr: 1, color: "#E85D04" }}
                      />
                      <Typography variant="body2">{event.location}</Typography>
                    </Box>
                  </Box>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {event.description}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: "auto",
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "#E85D04",
                        "&:hover": {
                          bgcolor: "#D85004",
                        },
                      }}
                    >
                      Learn More
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
