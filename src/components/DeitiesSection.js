"use client";

import { Box, Typography } from "@mui/material";
import DeityCard from "./DeityCard";

const deities = [
  {
    name: "Lord Ganesha",
    description:
      "The remover of obstacles and patron of arts and sciences. Lord Ganesha is worshipped first before beginning any new endeavor.",
    image: "/images/ganesha.jpg",
  },
  {
    name: "Lord Venkateshwara",
    description:
      "A form of Lord Vishnu, known for his supreme compassion and fulfilling the wishes of his devotees. He is the lord of seven hills.",
    image: "/images/venkateshwara.jpg",
  },
  {
    name: "Lord Hanuman",
    description:
      "The epitome of devotion and strength, Lord Hanuman represents selfless service and unwavering dedication to Lord Rama.",
    image: "/images/hanuman.jpg",
  },
  {
    name: "Goddess Lakshmi",
    description:
      "The goddess of wealth, fortune, and prosperity. She blesses devotees with both material and spiritual abundance.",
    image: "/images/lakshmi.jpg",
  },
  {
    name: "Lord Krishna",
    description:
      "The divine embodiment of love and wisdom, known for his teachings in the Bhagavad Gita and his playful nature.",
    image: "/images/krishna.jpg",
  },
  {
    name: "Lord Shiva",
    description:
      "The destroyer of evil and transformer of the universe. He represents meditation, yoga, and spiritual enlightenment.",
    image: "/images/shiva.jpg",
  },
];

const DeitiesSection = () => {
  return (
    <Box sx={{ py: 8, bgcolor: "background.paper" }}>
      <Box sx={{ px: { xs: 2, md: 4 } }}>
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontSize: { xs: "2rem", md: "2.5rem" },
            fontWeight: 600,
            mb: 6,
            color: "custom.darkGray",
          }}
        >
          Our Deities
        </Typography>
        <Box
          sx={{
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: { xs: "40px", md: "100px" },
              background:
                "linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,1))",
              pointerEvents: "none",
              zIndex: 1,
            },
            "&::before": {
              content: '""',
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: { xs: "40px", md: "100px" },
              background:
                "linear-gradient(to left, rgba(255,255,255,0), rgba(255,255,255,1))",
              pointerEvents: "none",
              zIndex: 1,
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 3,
              overflowX: "auto",
              px: { xs: 2, md: 4 },
              py: 2,
              scrollBehavior: "smooth",
              "&::-webkit-scrollbar": {
                height: "8px",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "rgba(0,0,0,0.1)",
                borderRadius: "4px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "primary.main",
                borderRadius: "4px",
                "&:hover": {
                  backgroundColor: "primary.dark",
                },
              },
              msOverflowStyle: "none",
            }}
          >
            {deities.map((deity) => (
              <Box
                key={deity.name}
                sx={{
                  minWidth: { xs: "280px", md: "320px" },
                  maxWidth: { xs: "280px", md: "320px" },
                  flexShrink: 0,
                }}
              >
                <DeityCard {...deity} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DeitiesSection;
