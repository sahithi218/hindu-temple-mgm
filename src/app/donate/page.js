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

export default function DonatePage() {
  return (
    <Box>
      <PageHero title="Support Our Temple" icon={MonetizationOnIcon} />

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
            Your generous donations help us maintain our temple, conduct
            religious ceremonies, and serve our community better. Choose a
            purpose and amount below to contribute.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              maxWidth: "800px",
              mx: "auto",
              mt: 2,
            }}
          >
            We’re proud to partner with <strong>Zeffy.com</strong> to collect
            donations. As a platform designed specifically for nonprofits, Zeffy
            ensures that 100% of your contributions go directly to our
            organization—with zero transaction fees.
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
              href="https://www.zeffy.com/en-US/donation-form/support-our-temple-donation-form-for-hindu-temple-of-montgomery"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate
            </Button>
          </Box>
        </Box>

        <Grid item xs={12} md={7}>
          <Card sx={{ mb: 4, boxShadow: 2 }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 3 }}>
                Since our donation platform provides zero transaction fee we
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
                Enter Custom amount or select from the options available.
              </Typography>
              <CardMedia
                component="img"
                image="/images/donations/step1_enteramount.png"
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
                Select percentage to 'Other' and Contribution to '0' as shown in
                the picture
              </Typography>
              <CardMedia
                component="img"
                image="/images/donations/step2_selectotherandzero.png"
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
                Finish the rest of the steps and click donate to make payment
              </Typography>
              <CardMedia
                component="img"
                image="/images/donations/step3_choosepayment.png"
                alt="step3"
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
