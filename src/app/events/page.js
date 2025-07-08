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
  Modal,
  Button,
  IconButton,
  Accordion, AccordionSummary, AccordionDetails
} from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PageHero from "@/components/Layout/PageHero";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EventCard from "@/components/EventCard";
export const events = [
  {
    id: 1,
    title: "Bhagavad Gita Gyan - Chanting Program",
    date_time: "Year-round",
    time: "Weekend (Saturday or Sunday), 1 hour/week",
    location: "Temple Complex",
    description:
      "A comprehensive chanting program focusing on authentic pronunciation and meaning of Bhagavad Gita shlokas. Taught by Dr. Chandra Shekar from Greenville, AL. Open to ages 7 and up. Includes 1-on-1 feedback and weekly live sessions. To join, text 334-245-3017 or email hindutemple.montgomery@gmail.com.",
    image: "/images/events/bhagavad-gita.jpg",
    flyer_image: "/images/events/bhagavad-gita.jpg",
    category: "Spiritual",
    date:""

  },
  {
    id: 2,
    title: "Bhagawan Jagannath Rath Yatra",
    date_time: "June 26, 2025 from 5:00 PM",
    time: "Temple open from 8:00 AM - 8 PM",
    location: "Temple Complex",
    description:
      "This is a holy day throughout the year in which Bhagwan Jagnnath will step out of the temple with his sister Subhadra abd brother Balram. During the Rathyatra, the devotees dance, chant bhajan, pull Charioy with rope and get the oppurtunity to receive the blessings of the Bhagwan Jagnnath through the voyage.",
    image: "/images/events/jagannath-rath-yatra.jpg",
    flyer_image: "/images/events/jagannath-temple-flyer.jpg",
    category: "Festival",
    date:"June 26, 2025"
  },

  {
    id: 3,
    title: "Guru Poornima",
    date_time: "July 10, 2025 from 4:30 PM",
    time: "Temple open from 9:00 AM - 8:30 PM",
    location: "Temple Complex",
    description:
      "Guru Purnima is a religious festival dedicated to offering respect to all the spiritual and academic gurus. This festival is traditionally observed to honour one's chosen spiritual teachers or leaders. It is observed on the full moon day (Purnima) in the month of Ashadha (June–July) according to the Hindu Calendar.",
    image: "/images/events/Guru-purnima-pic.jpg",
    flyer_image: "/images/events/guru-purnima.jpg",
    category: "Festival",
    date:"July 10, 2025"
  },
  
  
  // {
  //   id: 3,
  //   title: "Ganesh Chaturthi Celebrations",
  //   date_time: "September 6-16, 2024",
  //   time: "6:00 AM - 8:00 PM",
  //   location: "Temple Complex",
  //   description:
  //     "Join us for the 10-day celebration of Lord Ganesha's birthday with daily pujas, cultural programs, and prasadam distribution. Special events include Ganesh Abhishekam and 108 Modak offerings.",
  //   image: "/images/events/ganesh-chaturthi.jpg",
  //   category: "Festival",
  //   date:"June 26, 2025"
  // },
  // {
  //   id: 4,
  //   title: "Diwali Celebrations",
  //   date: "October 31, 2024",
  //   time: "5:00 PM - 10:00 PM",
  //   location: "Temple Complex",
  //   description:
  //     "Celebrate the festival of lights with an evening of cultural performances, traditional dances, and music. Enjoy special Lakshmi Puja followed by grand fireworks display.",
  //   image: "/images/events/diwali.jpg",
  //   category: "Cultural",
  // },
];

export default function EventsPage() {
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
const upcomingEvents = events.filter(event => new Date(event.date) >= today || event.date==="");
const pastEvents = events.filter(event => new Date(event.date) < today);

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
          {upcomingEvents.map((event) => (
            <Grid item xs={12} md={6} key={event.id}>
              <EventCard event={event} onImageClick={handleImageClick} />
            </Grid>
          ))}
        </Grid>
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
            width:  { xs: "100%", md: "50%" },
            maxHeight: "90vh",
            overflowY: "auto",
            flexDirection: "column",
            display: "flex",
          }}
        > <Button
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
      {pastEvents.length > 0 && (
        <Container maxWidth="lg" sx={{py:6}}>
        <Box sx={{ mt: 8,textAlign:"center" }}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" sx={{ fontWeight: 600, textAlign:"center" }}>
                For all Past Events expand this section
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Grid container spacing={4}>
                {pastEvents.map(event => (
                  <Grid item xs={12} md={6} key={event.id}>
                    <EventCard event={event} onImageClick={handleImageClick} />
                    
                  </Grid>
                ))}
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Box>
        </Container>
      )}

    </Box>
  );
}
