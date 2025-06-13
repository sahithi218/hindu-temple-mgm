"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import PageHero from "@/components/Layout/PageHero";
import TempleHinduIcon from "@mui/icons-material/TempleHindu";
import GroupsIcon from "@mui/icons-material/Groups";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CelebrationIcon from "@mui/icons-material/Celebration";

const values = [
  {
    title: "Spiritual Growth",
    description:
      "Fostering personal and community spiritual development through traditional Hindu practices and teachings.",
    icon: AutoStoriesIcon,
  },
  {
    title: "Community Service",
    description:
      "Serving our community through cultural programs, education, and charitable activities.",
    icon: GroupsIcon,
  },
  {
    title: "Cultural Preservation",
    description:
      "Preserving and promoting Hindu culture, traditions, and values for future generations.",
    icon: TempleHinduIcon,
  },
  {
    title: "Inclusive Worship",
    description:
      "Welcoming all devotees and providing a peaceful space for worship and meditation.",
    icon: CelebrationIcon,
  },
];

const priestMembers = [
  {
    name: "Ujas Bhai Pancholi",
    role: "Head Priest",
    image: "/images/members/head-priest.jpg",
  },
  
];
const boardMembers = [  
  {
    name: "Bipin Kumar",
    role: "Board Chairman",
    image: "/images/members/chairman.jpg",
  },    
];
const executiveCommitteeMembers = [
  
  {
    name: "Bipin Kumar",
    role: "Chairman - Board",
    image: "/images/members/chairman.jpg",
  },  
  {
    name: "Arun Garrepelly",
    role: "President - Executive Committee",
    image: "/images/members/secretary.jpg",
  },
  {
    name: "Jaimini Patel",
    role: "Vice President - Executive Committee",
    image: "/images/members/treasurer.jpg",
  },
  {
    name: "Shanthanu Rastogi",
    role: "Treasurer - Executive Committee",
    image: "/images/members/manager.jpg",
  },
];

export default function AboutPage() {
  return (
    <Box>
      <PageHero title="About Our Temple" icon={InfoIcon} />

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Mission Statement */}
        <Box sx={{ mb: 8, textAlign: "center", }}>
          <Typography
            variant="h4"
            sx={{
              mb: 3,
              color: "text.primary",
              fontWeight: 600,
              fontSize: { xs: "1.75rem", md: "2.25rem" },
            }}
          >
            Our Mission
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "text.secondary",
              maxWidth: "800px",
              mx: "auto",
              lineHeight: 1.8,
              fontSize: { xs: "1.1rem", md: "1.25rem" },
              fontWeight: "normal",
            }}
          >
            To provide a sacred space for worship, foster spiritual growth,
            preserve Hindu culture, and serve our community through religious
            education and charitable activities.
          </Typography>
        </Box>

        {/* Core Values */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              textAlign: "center",
              color: "text.primary",
              fontWeight: 600,
            }}
          >
            Our Core Values
          </Typography>
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    p: 3,
                    transition: "transform 0.2s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-8px)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      bgcolor: "rgba(232, 93, 4, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                    }}
                  >
                    <value.icon
                      sx={{
                        fontSize: 32,
                        color: "#E85D04",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 1,
                      color: "#E85D04",
                      fontWeight: 600,
                    }}
                  >
                    {value.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      lineHeight: 1.6,
                    }}
                  >
                    {value.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* History Section */}
        <Box>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              textAlign: "center",
              color: "text.primary",
              fontWeight: 600,
            }}
          >
            Our History
          </Typography>
          <Grid item xs={12} md={6}>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  mb: 2,
                  lineHeight: 1.8,
                  
                }}
              >
                Founded in 2019, the Hindu Temple of Montgomery emerged from the
                vision of dedicated community members who dreamed of
                establishing a spiritual home for Hindu families in the region.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  mb: 2,
                  lineHeight: 1.8,
                }}
              >
                What started as small gatherings in community members' homes has
                grown into a vibrant temple complex that serves thousands of
                devotees annually. Our temple has become a cornerstone of the
                Hindu community in Montgomery and surrounding areas.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.8,
                }}
              >
                Today, we continue to grow and expand our services, staying true
                to our commitment to preserve and promote Hindu culture while
                serving the spiritual needs of our community.
              </Typography>
            </Grid>
          <Grid container spacing={6} alignItems="center">
            {/* <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/images/temple/temple-history.jpg"
                alt="Temple History"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 2,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                }}
              />
            </Grid> */}
            
          </Grid>
        </Box>

        {/* Temple Members Section */}
       
     

         <Box sx={{ mt: 8, boxShadow:6, borderRadius:1 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              pt:2,
              textAlign: "center",
              color: "text.primary",
              fontWeight: 600,
            }}
          >
            Executive Committee members
          </Typography>
          <Grid container spacing={3}>
            {executiveCommitteeMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      {/* <Avatar
                        src={member.image}
                        alt={member.name}
                        sx={{
                          width: 120,
                          height: 120,
                          mb: 2,
                          fontSize: 32,
                          bgcolor: "rgba(232, 93, 4, 0.1)",
                          color: "#E85D04",
                          border: "3px solid rgba(232, 93, 4, 0.2)",
                        }}
                      >
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </Avatar> */}
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 0.5,
                        }}
                      >
                        {member.name}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#E85D04",
                          fontWeight: 500,
                        }}
                      >
                        {member.role}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}

            
          </Grid>
        </Box>

         <Box sx={{ mt: 4 , boxShadow: 6, borderRadius:1}}>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              pt:2,
              textAlign: "center",
              color: "text.primary",
              fontWeight: 600,
            }}
          >
            Priests
          </Typography>
          <Grid container spacing={3}>
            {priestMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      {/* <Avatar
                        src={member.image}
                        alt={member.name}
                        sx={{
                          width: 120,
                          height: 120,
                          mb: 2,
                          fontSize: 32,
                          bgcolor: "rgba(232, 93, 4, 0.1)",
                          color: "#E85D04",
                          border: "3px solid rgba(232, 93, 4, 0.2)",
                        }}
                      >
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </Avatar> */}
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 0.5,
                        }}
                      >
                        {member.name}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#E85D04",
                          fontWeight: 500,
                        }}
                      >
                        {member.role}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
