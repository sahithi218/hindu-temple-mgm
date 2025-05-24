"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  IconButton,
  Link,
} from "@mui/material";
import ContactsIcon from "@mui/icons-material/Contacts";
import PageHero from "@/components/Layout/PageHero";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <Box>
      <PageHero title="Contact Us" icon={ContactsIcon} />

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
            Get in Touch
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            Have questions about our services, events, or would like to schedule
            a puja? We're here to help. Reach out to us using the form below or
            through our contact information.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Card>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                  Send us a Message
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Name"
                        required
                        value={formData.name}
                        onChange={handleChange("name")}
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
                        required
                        value={formData.email}
                        onChange={handleChange("email")}
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
                        value={formData.phone}
                        onChange={handleChange("phone")}
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
                        label="Subject"
                        required
                        value={formData.subject}
                        onChange={handleChange("subject")}
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
                        label="Message"
                        multiline
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange("message")}
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
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        sx={{
                          bgcolor: "#E85D04",
                          py: 1.5,
                          "&:hover": {
                            bgcolor: "#D85004",
                          },
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <Card sx={{ mb: 4 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                  Contact Information
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                  >
                    <LocationOnIcon sx={{ color: "#E85D04", fontSize: 24 }} />
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 600, mb: 0.5 }}
                      >
                        Address
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        2005 Meriwether Rd,
                        <br />
                        Pike Rd, AL 36064
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                  >
                    <PhoneIcon sx={{ color: "#E85D04", fontSize: 24 }} />
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 600, mb: 0.5 }}
                      >
                        Phone
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        (334) 245-3017
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                  >
                    <EmailIcon sx={{ color: "#E85D04", fontSize: 24 }} />
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 600, mb: 0.5 }}
                      >
                        Email
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        info@hindutemplemontgomery.org
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                  >
                    <FacebookIcon sx={{ color: "#E85D04", fontSize: 24 }} />
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 600, mb: 0.5 }}
                      >
                        Social Media
                      </Typography>
                      <Link
                        href="https://www.facebook.com/HinduTempleofMontgomery/"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: "text.secondary",
                          textDecoration: "none",
                          "&:hover": {
                            color: "#E85D04",
                            textDecoration: "underline",
                          },
                        }}
                      >
                        <Typography variant="body2">
                          Follow us on Facebook
                        </Typography>
                      </Link>
                    </Box>
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                  >
                    <AccessTimeIcon sx={{ color: "#E85D04", fontSize: 24 }} />
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 600, mb: 0.5 }}
                      >
                        Temple Hours
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 1 }}
                      >
                        Weekdays:
                        <br />
                        Morning: 8:00 AM - 12:00 PM
                        <br />
                        Evening: 5:00 PM - 8:00 PM
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Weekends & Festivals:
                        <br />
                        Morning: 7:00 AM - 1:00 PM
                        <br />
                        Evening: 4:00 PM - 9:00 PM
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            {/* Google Maps */}
            <Card>
              <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
                <Box
                  component="iframe"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6908116.948961151!2d-95.07242305!3d32.282182300000024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888dd2ba3111bfef%3A0x9b9a929e9a2913d3!2sHindu%20Temple%20Of%20Montgomery!5e0!3m2!1sen!2sus!4v1748107182904!5m2!1sen!2sus"
                  sx={{
                    border: 0,
                    width: "100%",
                    height: "300px",
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
