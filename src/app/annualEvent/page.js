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
  Divider,Link
} from "@mui/material";
import { useState } from "react";
import PageHero from "@/components/Layout/PageHero";

import CelebrationIcon from '@mui/icons-material/Celebration';
import { FitScreen } from "@mui/icons-material";



export default function AnnualEventPage() {
  return (
    <Box>
      <PageHero title="Annual Cultural Event - Oct 4th Saturday From 5 PM" icon={CelebrationIcon} />

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
            Come join us for a night filled with cultural performances celebrating the spirit of India. From traditional dances to melodious music, this event promises to be a feast for the senses. Immerse yourself in the vibrant colors and rich traditions of Diwali as our talented performers take the stage.
            Bring your friends and family along to experience the diversity and beauty of Indian culture. Don't miss out on this opportunity to witness the magic of our community coming together to showcase our heritage.
            Mark your calendars and get ready for a memorable evening at the Annual Cultural Program!
          </Typography>
          

          
        </Box>
        <Divider sx={{ my: 4 }}>
          <Link
            href="#tickets"
            underline="none"
            sx={{
              color: "text.secondary",
              fontWeight: 500,
              "&:hover": { color: "primary.main" },
            }}
          >
            ↓ Jump to Ticket Info ↓
          </Link>
        </Divider>

        <Grid item xs={12} md={7}>
          <Card sx={{ mb: 4, boxShadow: 2 }}>
            <CardContent>
             
              <CardMedia
                component="img"
                image="/images/annualevent/htm2025-october4.png"
                alt="htm2024-october4"
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
                Dates
              </Typography>
              <CardMedia
                component="img"
                image="/images/annualevent/annual2025dates.png"
                alt="annual2025dates"
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

        

        <Grid item xs={12} md={7} id="tickets">
          <Card sx={{ mb: 4, boxShadow: 2 }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 3, textAlign: "center" }}>
                Tickets
              </Typography>
              <Typography variant="h6" sx={{ mb: 3 }}>
                Since our donation platform provides zero transaction fee we
                would like you to select percentage to 'Other' and Contribution to '0' as shown in
                the picture to avoid platform fees.
              </Typography>

              
              
              <CardMedia
                component="img"
                image="/images/annualevent/paymentcontribution.png"
                alt="step2"
                sx={{
                  width: "100%",
                  height: {
                    xs: "auto",
                    sm: 300,
                    md: 400,
                    lg: 500,
                  },
                  objectFit: {
                    xs: "contain", 
                    sm: "cover",
                  },
                  mb: 3,
                }}
              />

               <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: "#E85D04",
                color: "#fff",
                "&:hover": {
                  bgcolor: "#D85004",
                },
              }}
              href="https://www.zeffy.com/en-US/ticketing/hindu-society-of-alabama-inc-annual-cultural-event"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy Tickets
            </Button>

              
            </CardContent>
          </Card>
        </Grid>
      </Container>
    </Box>
  );
}
