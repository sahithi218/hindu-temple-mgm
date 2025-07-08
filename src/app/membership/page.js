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
} from "@mui/material";
import { useState } from "react";
import PageHero from "@/components/Layout/PageHero";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { FitScreen } from "@mui/icons-material";

const donationOptions = [
  {
    title: "Temple Development",
    description: "Support temple expansion and maintenance projects",
    suggestedAmounts: [51, 101, 251, 501],
  },
  {
    title: "Annadanam",
    description: "Contribute to our free meal service program",
    suggestedAmounts: [25, 51, 101, 251],
  },
  {
    title: "Festival Fund",
    description: "Help us celebrate festivals with grandeur",
    suggestedAmounts: [101, 251, 501, 1001],
  },
  {
    title: "General Donation",
    description: "Support our daily operations and services",
    suggestedAmounts: [11, 51, 101, 251],
  },
];

export default function MembershipPage() {
  return (
    <Box>
      <PageHero title="Membership" icon={MonetizationOnIcon} />

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
            Make a Difference
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            We warmly welcome you to become a part of our temple community through one of the following membership options:
          </Typography>
          <Typography
            variant="body1"
            component="div"
            sx={{
              color: "text.secondary",
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            <ul style={{ paddingLeft: "1.2em" }}>              
              <li>
                <strong>Regular Membership – $101/year</strong> Support the temple and stay connected through regular updates, events, and blessings.
              </li>
              <li>
                <strong>Membership with Blessings Package – $151/year</strong> Includes all the benefits of Regular Membership, plus one Satyanarayan Pooja and one Archana. 
                <br />
                Please note: This package does not apply on Poornima or festival days, and priest availability must be confirmed in advance.
              </li>              
            </ul>
          </Typography>         

          <Box
            sx={{
              position: "fixed",
              bottom: 0,
              left: 0,
              width: "100%",
              bgcolor: "#fff",
              borderTop: "1px solid #ddd",
              py: 2,
              display: "flex",
              justifyContent: "center",
              zIndex: 1300,
            }}
          >
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
              href="https://www.zeffy.com/en-US/ticketing/hindu-society-of-alabama-inc-memberships--2025"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy Membership
            </Button>
          </Box>
        </Box>

        <Grid item xs={12} md={7}>
          <Card sx={{ mb: 4, boxShadow: 2 }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 3 }}>
                Since our donation platform (Zeffy.com) provides zero transaction fee for non profits we
                would like you to follow below steps when you are donating to
                avoid platform fees.
              </Typography>

              <Typography variant="h7" sx={{ mb: 3 }}>
                <strong>Step1:</strong>
              </Typography>
              <Typography
                sx={{
                  color: "text.primary",
                  mx: "auto",
                }}
              >
                Choose membershiptype and click continue
              </Typography>
              <CardMedia
                component="img"
                image="/images/memberships/step1_choosemembershiptype.jpg"
                alt="step1"
                sx={{
                  width: "100%",
                  height: {
                    xs: 200,  
                    sm: 300,
                    md: 400,
                    lg: 500,  
                  },
                  objectFit: "cover",
                  mb: 3,
                }}
              />

              <Typography variant="h7" sx={{ mb: 3 }}>
                <strong>Step2:</strong>
              </Typography>
              <Typography
                sx={{
                  color: "text.primary",
                  mx: "auto",
                }}
              >
                Enter your details
              </Typography>
              <CardMedia
                component="img"
                image="/images/memberships/step2_details.jpg"
                alt="step2"
                sx={{
                  width: "100%",
                  height: {
                    xs: 200,  
                    sm: 300,
                    md: 400,
                    lg: 500,  
                  },
                  objectFit: "cover",
                  mb: 3,
                }}
              />

              <Typography variant="h7" sx={{ mb: 3 }}>
                <strong>Step3:</strong>
              </Typography>
              <Typography
                sx={{
                  color: "text.primary",
                  mx: "auto",
                }}
              >
                Select percentage to 'Other' and Contribution to '0' as shown in
                the picture
              </Typography>
              <CardMedia
                component="img"
                image="/images/memberships/step3_renewotherzeor.jpg"
                alt="step2"
                sx={{
                  width: "100%",
                  height: {
                    xs: 200,  
                    sm: 300,
                    md: 400,
                    lg: 500,  
                  },
                  objectFit: "cover",
                  mb: 3,
                }}
              />

              <Typography variant="h7" sx={{ mb: 3 }}>
                <strong>Step4:</strong>
              </Typography>
              <Typography
                sx={{
                  color: "text.primary",
                  mx: "auto",
                }}
              >
                Finish the rest of the steps and click buy to make payment
              </Typography>
              <CardMedia
                component="img"
                image="/images/memberships/step4_paymentdetails.jpg"
                alt="step4"
                sx={{
                  width: "100%",
                  height: {
                    xs: 200,  
                    sm: 300,
                    md: 400,
                    lg: 500,  
                  },
                  objectFit: "cover",
                  mb: 3,
                }}
              />
            </CardContent>
          </Card>
        </Grid>
      </Container>
    </Box>
  );
}
