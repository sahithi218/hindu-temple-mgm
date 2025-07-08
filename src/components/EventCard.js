"use client";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip
} from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const EventCard = ({ event,onImageClick }) => {
  return (
    <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 2,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Box
                  sx={{ position: "relative", cursor: "pointer" }}
                  onClick={() => onImageClick?.(event.flyer_image)}
                >
                  <CardMedia
                    component="img"
                    image={event.image}
                    alt={event.title}
                    sx={{
                      height: 240,
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <Chip
                    label={event.category}
                    sx={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      bgcolor: "#E85D04",
                      color: "white",
                      fontWeight: 500,
                    }}
                  />
                </Box>

                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: "text.primary",
                    }}
                  >
                    {event.title}
                  </Typography>

                  <Box sx={{ mb: 2 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 1,
                        color: "text.secondary",
                      }}
                    >
                      <EventIcon
                        sx={{ fontSize: 20, mr: 1, color: "#E85D04" }}
                      />
                      <Typography variant="body2">{event.date_time}</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 1,
                        color: "text.secondary",
                      }}
                    >
                      <AccessTimeIcon
                        sx={{ fontSize: 20, mr: 1, color: "#E85D04" }}
                      />
                      <Typography variant="body2">{event.time}</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "text.secondary",
                      }}
                    >
                      <LocationOnIcon
                        sx={{ fontSize: 20, mr: 1, color: "#E85D04" }}
                      />
                      <Typography variant="body2">{event.location}</Typography>
                    </Box>
                  </Box>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {event.description}
                  </Typography>

                  {/* <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: "auto",
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "#E85D04",
                        "&:hover": {
                          bgcolor: "#D85004",
                        },
                      }}
                    >
                      Learn More
                    </Button>
                  </Box> */}
                </CardContent>
              </Card>
  );
};

export default EventCard;