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
} from "@mui/material";
import { useState } from "react";
import PageHero from "@/components/Layout/PageHero";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

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
  const [selectedPurpose, setSelectedPurpose] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handlePurposeChange = (event) => {
    setSelectedPurpose(event.target.value);
    setSelectedAmount(null);
  };

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (event) => {
    setCustomAmount(event.target.value);
    setSelectedAmount(null);
  };

  const handleDonorInfoChange = (field) => (event) => {
    setDonorInfo({ ...donorInfo, [field]: event.target.value });
  };

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
        </Box>

        <Grid container spacing={4}>
          {/* Donation Options */}
          <Grid item xs={12} md={7}>
            <Card sx={{ mb: 4, boxShadow: 2 }}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Select Donation Purpose
                </Typography>
                <FormControl fullWidth sx={{ mb: 4 }}>
                  <InputLabel>Purpose of Donation</InputLabel>
                  <Select
                    value={selectedPurpose}
                    onChange={handlePurposeChange}
                    label="Purpose of Donation"
                  >
                    {donationOptions.map((option) => (
                      <MenuItem key={option.title} value={option.title}>
                        {option.title}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                {selectedPurpose && (
                  <>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                      Select Amount
                    </Typography>
                    <Grid container spacing={2} sx={{ mb: 3 }}>
                      {donationOptions
                        .find((opt) => opt.title === selectedPurpose)
                        ?.suggestedAmounts.map((amount) => (
                          <Grid item xs={6} sm={3} key={amount}>
                            <Button
                              fullWidth
                              variant={
                                selectedAmount === amount
                                  ? "contained"
                                  : "outlined"
                              }
                              onClick={() => handleAmountSelect(amount)}
                              sx={{
                                bgcolor:
                                  selectedAmount === amount
                                    ? "#E85D04"
                                    : "transparent",
                                borderColor: "#E85D04",
                                color:
                                  selectedAmount === amount
                                    ? "white"
                                    : "#E85D04",
                                "&:hover": {
                                  bgcolor:
                                    selectedAmount === amount
                                      ? "#D85004"
                                      : "rgba(232, 93, 4, 0.05)",
                                  borderColor: "#D85004",
                                },
                              }}
                            >
                              ${amount}
                            </Button>
                          </Grid>
                        ))}
                    </Grid>

                    <TextField
                      fullWidth
                      label="Custom Amount"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      type="number"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">$</InputAdornment>
                        ),
                      }}
                      sx={{
                        mb: 3,
                        "& .MuiOutlinedInput-root": {
                          "&:hover fieldset": {
                            borderColor: "#E85D04",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#E85D04",
                          },
                        },
                      }}
                    />
                  </>
                )}
              </CardContent>
            </Card>

            {/* Donor Information */}
            <Card sx={{ boxShadow: 2 }}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Donor Information
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      value={donorInfo.name}
                      onChange={handleDonorInfoChange("name")}
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "&:hover fieldset": {
                            borderColor: "#E85D04",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#E85D04",
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      value={donorInfo.email}
                      onChange={handleDonorInfoChange("email")}
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "&:hover fieldset": {
                            borderColor: "#E85D04",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#E85D04",
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone"
                      value={donorInfo.phone}
                      onChange={handleDonorInfoChange("phone")}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "&:hover fieldset": {
                            borderColor: "#E85D04",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#E85D04",
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Address"
                      multiline
                      rows={2}
                      value={donorInfo.address}
                      onChange={handleDonorInfoChange("address")}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "&:hover fieldset": {
                            borderColor: "#E85D04",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#E85D04",
                          },
                        },
                      }}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Summary and Payment Section */}
          <Grid item xs={12} md={5}>
            <Card
              sx={{
                position: "sticky",
                top: 24,
                boxShadow: 2,
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Donation Summary
                </Typography>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    Purpose: {selectedPurpose || "Not selected"}
                  </Typography>
                  <Typography variant="body1">
                    Amount: ${selectedAmount || customAmount || "0"}
                  </Typography>
                </Box>
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  disabled={
                    !selectedPurpose ||
                    (!selectedAmount && !customAmount) ||
                    !donorInfo.name ||
                    !donorInfo.email
                  }
                  sx={{
                    bgcolor: "#E85D04",
                    py: 1.5,
                    "&:hover": {
                      bgcolor: "#D85004",
                    },
                    "&.Mui-disabled": {
                      bgcolor: "rgba(232, 93, 4, 0.3)",
                    },
                  }}
                >
                  Proceed to Payment
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
