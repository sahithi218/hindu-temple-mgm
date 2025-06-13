"use client";

import { Box, Typography, Button, Grid, Container } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const WelcomeSection = () => {
  return (
    <Box
      sx={{
        bgcolor: "white",
        color: "text.primary",
        py: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Text Content */}
          <Grid item xs={12} md={6}>
            <Box sx={{ pr: { md: 4 } }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  fontWeight: 600,
                  mb: 2,
                  // background:
                  //   "linear-gradient(45deg, #F48C06 30%, #E85D04 90%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Welcome to Hindu Temple Montgomery
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                  fontWeight: 400,
                  color: "text.secondary",
                  mb: 4,
                  lineHeight: 1.6,
                }}
              >
                A sacred space for worship, spiritual growth, and community
                gathering. Join us in celebrating our rich cultural heritage and
                divine traditions.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexWrap: "wrap",
                }}
              >
                <Link href="/about" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: "1.1rem",
                      bgcolor: "#E85D04",
                      "&:hover": {
                        bgcolor: "#D85004",
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </Link>
                <Link href="/services" style={{ textDecoration: "none" }}>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: "1.1rem",
                      color: "#E85D04",
                      borderColor: "#E85D04",
                      "&:hover": {
                        borderColor: "#D85004",
                        bgcolor: "rgba(232, 93, 4, 0.05)",
                      },
                    }}
                  >
                    Our Services
                  </Button>
                </Link>
                <Link href="/donate" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: "1.1rem",
                      bgcolor: "#E85D04",
                      "&:hover": {
                        bgcolor: "#D85004",
                      },
                    }}
                  >
                    Donate
                  </Button>
                </Link>
              </Box>
            </Box>
          </Grid>

          {/* Temple Image */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                height: { xs: "300px", sm: "400px", md: "500px" },
                width: "100%",
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
              }}
            >
              <Image
                src="/images/temple/temple-front.jpg"
                alt="Hindu Temple of Montgomery Front View"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                priority
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WelcomeSection;
