"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Modal,
  Button,
  IconButton,
} from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";
import Image from "next/image";
import { events } from "../app/events/page";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const UpcomingEvents = () => {
  const [openImageModal, setOpenImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setOpenImageModal(imageUrl !== "" && true);
  };

  const handleCloseModal = () => {
    setOpenImageModal(false);
    setSelectedImage("");
  };

  const today = new Date();
  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);    
    return eventDate >= today;
  });

  if (filteredEvents.length === 0) {
    return null;
  }

  return (
    <Box sx={{ bgcolor: "background.paper", pb: 2 }}>
      <Container
        maxWidth={false}
        disableGutters
        sx={{ px: { xs: 2, md: 4 }, py: 6 }}
      >
        {/* Introduction */}

        <Typography
          variant="h2"
          align="center"
          sx={{
            fontSize: { xs: "2rem", md: "2.5rem" },
            fontWeight: 600,
            mb: 6,
            color: "custom.darkGray",
          }}
        >
          Upcoming and Current Events
        </Typography>

        {/* Events Grid */}
        <Grid container spacing={4} justifyContent="flex-start">
          {filteredEvents.map((event) => (
            <Grid item xs={12} md={4} key={event.id}>
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
                <Box
                  sx={{ position: "relative", cursor: "pointer" }}
                  onClick={() => handleImageClick(event.flyer_image)}
                >
                  <CardMedia
                    component="img"
                    image={event.image}
                    alt={event.title}
                    sx={{
                      height: 240,
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
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
                </Box>

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
                      <Typography variant="body2">{event.date_time}</Typography>
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

                  {/* <Box
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
                  </Box> */}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography sx={{ mt: 2 }}>
          For year along and all events
          <Link
            href="/events"
            passHref
            //style={{ textDecoration: "none", color: "inherit" }}
          >
            {" "}
            click here{" "}
          </Link>
        </Typography>
      </Container>
      {/* Image Modal */}
      <Modal
        open={openImageModal}
        onClose={handleCloseModal}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
        }}
      >
        <Box
          sx={{
            position: "relative",
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            //maxWidth: { xs: "1000px", md: "500px" },
            width: { xs: "100%", md: "50%" },
            maxHeight: "90vh",
            overflowY: "auto",
            flexDirection: "column",
            display: "flex",
          }}
        >
          <Button
            variant="contained"
            sx={{ mt: -1, mr: -1, position: "absolute", top: 8, right: 8 }}
            onClick={handleCloseModal}
            size="small"
          >
            <IconButton
              onClick={handleCloseModal}
              sx={{
                position: "absolute",
                top: 2,
                right: -4,
                zIndex: 1,
                color: "white",
              }}
            >
              <CloseIcon fontSize="small" color="action" />
            </IconButton>
            Close
          </Button>
          <img
            src={selectedImage}
            alt="Event"
            style={{
              width: "100%",
              height: "90vh",
              display: "block",
              borderRadius: "8px",
            }}
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default UpcomingEvents;
