"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
  CardMedia,
  Divider,
  Link,
} from "@mui/material";
import { useState } from "react";
import PageHero from "@/components/Layout/PageHero";

import CelebrationIcon from "@mui/icons-material/Celebration";
import { FitScreen } from "@mui/icons-material";

export default function DeviNavaratriPage() {
  return (
    <Box>
      <PageHero
        title="Devi Navaratri"
        icon={CelebrationIcon}
      />

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Introduction */}
        <Box sx={{ mb: 6, textAlign: "center" }}>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            Devi Navratri is a major annual Hindu festival, celebrated for nine nights and ten days, honoring the supreme goddess Durga and her divine feminine power, or Shakti. The festival marks the victory of good over evil, often depicted as Goddess Durga's triumph over demons like Mahishasura.
          </Typography>
        </Box>
        
        <Grid item xs={12} md={7}>
          <Card sx={{ mb: 4, boxShadow: 2 }}>
            <CardContent>
              <CardMedia
                component="img"
                image="/images/events/Navaratri flyer.jpeg"
                alt="Navaratri flyer"
                sx={{
                  width: "100%",
                  height: {
                    xs: "auto",
                    sm: 300,
                    md: 400,
                    lg: 1400,
                  },

                  objectFit: {
                    xs: "contain",
                    sm: "cover",
                  },
                  mb: 3,
                }}
              />
            </CardContent>
          </Card>
          <Card sx={{ mb: 4, boxShadow: 2 }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 3, textAlign: "center" }}>
                Every Day Details
              </Typography>
              <CardMedia
                component="img"
                image="/images/events/Navaratri_EveryDay flyer.jpeg"
                alt="Navaratri_EveryDay"
                sx={{
                  width: "100%",
                  height: {
                    xs: "auto",
                    sm: 300,
                    md: 400,
                    lg: 1500,
                  },
                  objectFit: {
                    xs: "contain",
                    sm: "cover",
                  },
                  mb: 3,
                }}
              />
            </CardContent>
          </Card>
          <Card sx={{ mb: 4, boxShadow: 2 }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 3, textAlign: "center" }}>
                Food Sponsors
              </Typography>
              <CardMedia
                component="img"
                image="/images/events/Navaratri_Food_Sponsors flyer.jpeg"
                alt="Navaratri_Food Sponsors"
                sx={{
                  width: "100%",
                  height: {
                    xs: "auto",
                    sm: 300,
                    md: 400,
                    lg: 1500,
                  },
                  objectFit: {
                    xs: "contain",
                    sm: "cover",
                  },
                  mb: 3,
                }}
              />
            </CardContent>
          </Card>
          <Card sx={{ mb: 4, boxShadow: 2 }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 3, textAlign: "center" }}>
                Bathukamma
              </Typography>
              <CardMedia
                component="img"
                image="/images/events/HTM Bathukamma 2025 Flyer.png"
                alt="Navaratri_Food Sponsors"
                sx={{
                  width: "100%",
                  height: {
                    xs: "auto",
                    sm: 300,
                    md: 400,
                    lg: 1500,
                  },
                  objectFit: {
                    xs: "contain",
                    sm: "cover",
                  },
                  mb: 3,
                }}
              />
            </CardContent>
          </Card>
        </Grid>

        
        {/* Contact Form */}
        {/* <Grid item xs={12} md={7} id="nomination">
          <Card>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                Nomination Form
              </Typography>

              <Box sx={{ my: 4 }}>
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSf-_JKesluODA8NMqsyGjIWn_RqkZD6MGu2pkMXK6IUnOx09g/viewform?embedded=true"
                  width="640"
                  height="999"
                >
                  Loading…
                </iframe>
              </Box>
            </CardContent>
          </Card>
        </Grid> */}
      </Container>
    </Box>
  );
}
