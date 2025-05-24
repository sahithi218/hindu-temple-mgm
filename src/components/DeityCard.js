"use client";

import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const DeityCard = ({ name, description, image }) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="300"
        image={image}
        alt={name}
        sx={{
          objectFit: "cover",
        }}
      />
      <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            color: "primary.main",
            fontWeight: 600,
          }}
        >
          {name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DeityCard;
