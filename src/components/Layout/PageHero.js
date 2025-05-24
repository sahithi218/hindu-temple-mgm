"use client";

import { Box, Container, Typography } from "@mui/material";

const PageHero = ({ title, icon: IconComponent }) => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #E85D04 0%, #F48C06 100%)",
        color: "white",
        pt: { xs: 6, md: 8 },
        pb: { xs: 5, md: 7 },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)",
          backgroundSize: "cover",
          opacity: 0.6,
          zIndex: 1,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "30%",
          background: "linear-gradient(to top, #fff, transparent)",
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {IconComponent && (
            <IconComponent sx={{ fontSize: 56, mb: 2.5, color: "white" }} />
          )}
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 1,
              color: "white",
              textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
              letterSpacing: "0.02em",
            }}
          >
            {title}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default PageHero;
