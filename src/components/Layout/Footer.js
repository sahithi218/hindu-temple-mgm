"use client";

import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
  IconButton,
  Divider,
  Stack,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  const footerLinks = [
    { title: "Events", path: "/events" },
    { title: "Services", path: "/services" },
    { title: "Donate", path: "/donate" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "background.paper",
        color: "text.primary",
        py: 6,
        mt: "auto",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Box sx={{ px: { xs: 2, md: 4 } }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                background: "linear-gradient(45deg, #FF6B35 30%, #FF8F6B 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 2,
              }}
            >
              Hindu Temple of Montgomery
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              A sacred space dedicated to spiritual growth, cultural
              preservation, and community service. Join us in our mission to
              create a peaceful and harmonious environment for worship and
              celebration.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton
                color="primary"
                size="small"
                component="a"
                href="https://www.facebook.com/HinduTempleofMontgomery/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  "&:hover": {
                    transform: "translateY(-2px)",
                    transition: "transform 0.2s",
                  },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                color="primary"
                size="small"
                sx={{
                  "&:hover": {
                    transform: "translateY(-2px)",
                    transition: "transform 0.2s",
                  },
                }}
              >
                <InstagramIcon />
              </IconButton>
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 600,
                background: "linear-gradient(45deg, #FF6B35 30%, #FF8F6B 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Temple Timings
            </Typography>
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="subtitle1"
                color="primary"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                Daily Timings
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Morning: 9:00 AM - 12:00 PM
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Evening: 5:00 PM - 8:00 PM
              </Typography>
              <Typography
                variant="subtitle1"
                color="primary"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                Weekend Timings
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Morning: 9:00 AM - 12:00 PM
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Evening: 5:00 PM - 8:00 PM
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 600,
                background: "linear-gradient(45deg, #FF6B35 30%, #FF8F6B 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Contact Info
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              2005 Meriwether Rd
              <br />
              Pike Rd, AL 36064
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Phone: (334) 245-3017
              <br />
              Email: hindutemple.montgomery@gmail.com
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ my: 2 }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            px: 1,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Hindu Temple Montgomery. All rights
            reserved.
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: { xs: 1, sm: 0 } }}
          >
            Developed by{" "}
            {/* <MuiLink
              // href="https://www.linkedin.com/in/sahithikotagiri/"
              // target="_blank"
              // rel="noopener noreferrer"
              // underline="hover"
              // color="primary"
            >
              Sahithi Kotagiri
            </MuiLink> */}
            Bhakth Jan
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
