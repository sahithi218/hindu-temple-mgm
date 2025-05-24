"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import TempleHinduIcon from "@mui/icons-material/TempleHindu";
import PageHero from "@/components/Layout/PageHero";

const services = [
  {
    id: 1,
    title: "Thoram",
    image: "/images/services/thoram.jpg",
    link: "/services/thoram",
  },
  {
    id: 2,
    title: "Puja Schedules",
    image: "/images/services/puja-schedules.jpg",
    link: "/services/puja-schedules",
  },
  {
    id: 3,
    title: "Request Priest",
    image: "/images/services/request-priest.jpg",
    link: "/services/request-priest",
  },
  {
    id: 4,
    title: "Car Puja",
    image: "/images/services/car-puja.jpg",
    link: "/services/car-puja",
  },
  {
    id: 5,
    title: "Annual Pujas",
    image: "/images/services/annual-pujas.jpg",
    link: "/services/annual-pujas",
  },
  {
    id: 6,
    title: "Pradhana Sevas",
    image: "/images/services/pradhana-sevas.jpg",
    link: "/services/pradhana-sevas",
  },
  {
    id: 7,
    title: "Vadamala Archana",
    image: "/images/services/vadamala-archana.jpg",
    link: "/services/vadamala-archana",
  },
  {
    id: 8,
    title: "Antharalaya Darshan",
    image: "/images/services/antharalaya-darshan.jpg",
    link: "/services/antharalaya-darshan",
  },
];

export default function ServicesPage() {
  return (
    <Box>
      <PageHero title="Temple Services" icon={TempleHinduIcon} />

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
            Our Sacred Services
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            Discover our range of traditional Hindu services and rituals. From
            daily pujas to special ceremonies, we offer various ways to connect
            with the divine and maintain our cultural traditions.
          </Typography>
        </Box>

        {/* Services Grid */}
        <Grid container spacing={4}>
          {services.map((service) => (
            <Grid item xs={12} sm={6} md={3} key={service.id}>
              <Box
                component="a"
                href={service.link}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textDecoration: "none",
                  position: "relative",
                  p: 3,
                  bgcolor: "white",
                  borderRadius: 4,
                  boxShadow: "0 2px 20px rgba(0,0,0,0.05)",
                  height: "100%",
                  transition: "transform 0.2s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                  },
                }}
              >
                {/* Image */}
                <Box
                  sx={{
                    width: { xs: 120, sm: 140, md: 160 },
                    height: { xs: 120, sm: 140, md: 160 },
                    mb: 3,
                    position: "relative",
                  }}
                >
                  <CardMedia
                    component="div"
                    image={service.image}
                    title={service.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      boxShadow: "0 4px 20px rgba(232, 93, 4, 0.15)",
                    }}
                  />
                </Box>

                {/* Title */}
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: "1.1rem", sm: "1.2rem" },
                    fontWeight: 600,
                    color: "#E85D04",
                    textAlign: "center",
                    mb: 2,
                  }}
                >
                  {service.title}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    textAlign: "center",
                    fontSize: { xs: "0.9rem", sm: "0.95rem" },
                    lineHeight: 1.6,
                    maxWidth: "280px",
                    mx: "auto",
                  }}
                >
                  {service.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
