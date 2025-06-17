"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  IconButton,
} from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import AttachMoney from "@mui/icons-material/AttachMoney";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PageHero from "@/components/Layout/PageHero";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Modal from "@mui/material/Modal";


const services = [
  {
    id: 1,
    title: "Archana (Any Deity)",
    memberprice: "$11",
    nonmemberprice: "$15",
    devoteehomeprice: "N/A",
    time: "Weekend (Saturday or Sunday), 1 hour/week",
    location: "Temple Complex",
    description:
      "Archana is a personal puja (prayer ritual) where a devotee offers flowers, incense, and other items to a deity, while the priest chants their name, birth star (Nakshatra), and lineage (Gotra). It's a way to express gratitude, seek blessings, and strengthen the connection with the deity. ",
    image: "/images/services/archana.jpg",
    category: "Spiritual",
  },
  {
    id: 2,
    title: "Abhishekam (Shiv Ling)",
    memberprice: "$101",
    nonmemberprice: "$121",
    devoteehomeprice: "N/A",
    time: "9:00 AM - 9:00 PM",
    location: "Temple Complex",
    description:
      "A religious ritual, commonly practiced in Hindu and Buddhism temples, where a devotee pours liquid offerings (like water, milk, yogurt, honey, or other specific substances) onto an image or murti (idol) of a God or Goddess. The term Abhishekam translates to bathing of the deity",
    image: "/images/events/temple.jpg",
    category: "Special",
  },
  {
    id: 3,
    title: "Kalyana Utsavam",
    memberprice: "$151",
    nonmemberprice: "$175",
    devoteehomeprice: "$201",
    time: "Weekend (Saturday or Sunday), 1 hour/week",
    location: "Temple Complex",
    description:
      "A significant ceremony, often referred to as a divine wedding or celestial wedding, celebrating the marriage of a deity (or deities). It's a ritualistic event performed to bring blessings of prosperity, happiness, and well-being to the world. ",
    image: "/images/services/archana.jpg",
    category: "Spiritual",
    dh: "yes",
  },
  {
    id: 4,
    title: "Satyanarayan Pooja",
    memberprice: "$101",
    nonmemberprice: "$121",
    devoteehomeprice: "$151",
    time: "9:00 AM - 9:00 PM",
    location: "Temple Complex",
    description:
      "Satyanarayana Pooja is a Hindu ritual performed to worship Lord Vishnu, specifically in his Satyanarayana form, which is associated with truth and righteousness. It's a popular practice, often performed to seek blessings for wealth, prosperity, good health, and happiness in the household. ",
    image: "/images/events/temple.jpg",
    category: "Special",
    dh: "yes",
  },
  {
    id: 5,
    title: "Satyanarayan Pooja (1 year max of 5)",
    memberprice: "$301",
    nonmemberprice: "$351",
    devoteehomeprice: "N/A",
    time: "Weekend (Saturday or Sunday), 1 hour/week",
    location: "Temple Complex",
    description:
      "Satyanarayana Pooja is a Hindu ritual performed to worship Lord Vishnu, specifically in his Satyanarayana form, which is associated with truth and righteousness. It's a popular practice, often performed to seek blessings for wealth, prosperity, good health, and happiness in the household. ",
    image: "/images/services/archana.jpg",
    category: "Spiritual",    
  },
  {
    id: 6,
    title: "Havan (Ayusshya,Shanti,Navagraha Gayatri)",
    memberprice: "$151",
    nonmemberprice: "$175",
    devoteehomeprice: "$201",
    time: "9:00 AM - 9:00 PM",
    location: "Temple Complex",
    description:
      "In Hindu tradition, a Havan (or Homam) is a sacred fire ritual, a form of worship where offerings are made into a consecrated fire while chanting mantras. The combination of Ayushya, Shanti, and Navagraha Gayatri suggests a specific type of Havan designed for well-being and harmonizing astrological influences. ",
    image: "/images/events/temple.jpg",
    category: "Special",
    dh: "yes",
  },
  {
    id: 7,
    title: "Namakaranam (Name Giving)",
    memberprice: "$101",
    nonmemberprice: "$121",
    devoteehomeprice: "$151",
    time: "Weekend (Saturday or Sunday), 1 hour/week",
    location: "Temple Complex",
    description:
      "Namakaranam, also known as Naamkaran, is a Hindu naming ceremony performed for newborn babies. It's a rite of passage (samskara) that marks the child's entry into society and recognizes them as an individual with a name. ",
    image: "/images/services/archana.jpg",
    category: "Spiritual",
    dh: "yes",
  },
  {
    id: 8,
    title: "Annaprasanam (Food Initiation)",
    memberprice: "$101",
    nonmemberprice: "$121",
    devoteehomeprice: "$151",
    time: "9:00 AM - 9:00 PM",
    location: "Temple Complex",
    description:
      "Annaprashanam, also known as Annaprashana or the rice-eating ceremony, is a significant Hindu rite of passage (Saṃskāra) that marks an infant's first intake of food other than milk. It is a traditional celebration to introduce solid food into a baby's diet. ",
    image: "/images/events/temple.jpg",
    category: "Special",
    dh: "yes",
  },
  {
    id: 9,
    title: "Choula (Hair offering)",
    memberprice: "$101",
    nonmemberprice: "$121",
    devoteehomeprice: "$151",
    time: "Weekend (Saturday or Sunday), 1 hour/week",
    location: "Temple Complex",
    description:
      "Choula, also known as Mundan or Mundan Pooja, is a Hindu ritual where a baby's hair is shaved off as part of a ceremony, typically between the first and third year of life. The shaving is done to symbolize a new beginning and freedom from past negative influences",
    image: "/images/services/archana.jpg",
    category: "Spiritual",
    dh: "yes",
  },
  {
    id: 10,
    title: "Vidya Arambham (Shool Begining)",
    memberprice: "$51",
    nonmemberprice: "$61",
    devoteehomeprice: "$101",
    time: "9:00 AM - 9:00 PM",
    location: "Temple Complex",
    description:
      "Vidyarambham, meaning commencement of studies in Sanskrit, is a traditional Hindu initiation ceremony performed before a child begins their formal education. It is a ritual, also known as Akshara Abhyasam or Muttal Eluttu, that marks the beginning of a child's learning journey. ",
    image: "/images/events/temple.jpg",
    category: "Special",
    dh: "yes",
  },
  {
    id: 11,
    title: "Upanayanam (Yagnopavit/Janeu)",
    memberprice: "$151",
    nonmemberprice: "$175",
    devoteehomeprice: "$251",
    time: "Weekend (Saturday or Sunday), 1 hour/week",
    location: "Temple Complex",
    description:
      "Upanayanam, also known as Yagnopavit or Janeu, is a sacred thread ceremony in Hinduism that marks a significant transition in a boy's life. It's a rite of passage into spiritual adulthood and marks the beginning of formal education. The ceremony involves wearing a sacred thread (Yajñopavīta or Janeu) and chanting the Gayatri Mantra. ",
    image: "/images/services/archana.jpg",
    category: "Spiritual",
    dh: "yes",
  },
  {
    id: 12,
    title: "Vahana Pooja (Vehicle Prayer)",
    memberprice: "$51",
    nonmemberprice: "$51",
    devoteehomeprice: "$101",
    time: "9:00 AM - 9:00 PM",
    location: "Temple Complex",
    description:
      "Vahana Pooja, also known as Ayudha Puja, is a Hindu ritual performed to bless and protect vehicles, like cars, from harm and evil influences. It's often done when a new vehicle is purchased or as a form of worship on the festival of Navratri. The ceremony involves decorating the vehicle and offering prayers to deities.",
    image: "/images/events/temple.jpg",
    category: "Special",
    dh: "yes",
  },
  {
    id: 13,
    title: "Bhoomi Pooja (Ground Breaking Ceremony)",
    memberprice: "N/A",
    nonmemberprice: "N/A",
    devoteehomeprice: "$151",
    time: "Weekend (Saturday or Sunday), 1 hour/week",
    location: "Temple Complex",
    description:
      "A traditional Hindu ritual performed to acknowledge Mother Earth and seek blessings for a new construction project. It's a symbolic act of asking forgiveness for disturbing the land and requesting blessings for a successful and prosperous build.",
    image: "/images/services/archana.jpg",
    category: "Spiritual",
    dh: "yes",
  },
  {
    id: 14,
    title: "Gruha Pravesham(House Warming) + Havan",
    memberprice: "N/A",
    nonmemberprice: "N/A",
    devoteehomeprice: "$201",
    time: "9:00 AM - 9:00 PM",
    location: "Temple Complex",
    description:
      "A Hindu ritual performed to mark the entry into a new home. It is a ceremony that purifies the house and invites blessings for prosperity, peace, and protection. The ceremony involves traditional rituals, typically invoking deities like Lord Ganesha and Goddess Lakshmi. ",
    image: "/images/events/temple.jpg",
    category: "Special",
    dh: "yes",
  },
  {
    id: 15,
    title: "Gruha Pravesham with Satyanarayan puja, Havan, Vaasthu puja (House Warming)",
    memberprice: "N/A",
    nonmemberprice: "N/A",
    devoteehomeprice: "$351",
    time: "Weekend (Saturday or Sunday), 1 hour/week",
    location: "Temple Complex",
    description:
      "A Hindu ritual performed to mark the entry into a new home. It is a ceremony that purifies the house and invites blessings for prosperity, peace, and protection. The ceremony involves traditional rituals, typically invoking deities like Lord Ganesha and Goddess Lakshmi. ",
    image: "/images/services/archana.jpg",
    category: "Spiritual",
    dh: "yes",
  },
  {
    id: 16,
    title: "Kalash Sthapan",
    memberprice: "N/A",
    nonmemberprice: "N/A",
    devoteehomeprice: "$101",
    time: "9:00 AM - 9:00 PM",
    location: "Temple Complex",
    description:
      "Kalash Sthapna, also known as Ghatasthapana, is a sacred Hindu ritual performed at the beginning of Navratri to invoke the presence of Goddess Shakti. It involves placing a Kalash, or holy pot, and preparing it for worship, symbolizing the union of the divine and the material world. ",
    image: "/images/events/temple.jpg",
    category: "Special",
    dh: "yes",
  },
  {
    id: 17,
    title: "Nischithardam (Engagement)",
    memberprice: "$101",
    nonmemberprice: "$121",
    devoteehomeprice: "$151",
    time: "Weekend (Saturday or Sunday), 1 hour/week",
    location: "Temple Complex",
    description:
      "A formal ceremony signifying the commitment of two families to a marriage alliance. It involves rituals, blessings, and the exchange of gifts, typically occurring before the main wedding ceremony. ",
    image: "/images/services/archana.jpg",
    category: "Spiritual",
    dh: "yes",
  },
  {
    id: 18,
    title: "Wedding Ceremony",
    memberprice: "$301",
    nonmemberprice: "$351",
    devoteehomeprice: "$351",
    time: "9:00 AM - 9:00 PM",
    location: "Temple Complex",
    description:
      " A traditional Hindu wedding ceremony, conducted by a priest, is a deeply symbolic and spiritual event rooted in Vedic rituals. It’s not just a union of two individuals but a sacred bond between two souls and their families, often performed in Sanskrit with explanations in the local language for guests to follow along",
    image: "/images/events/temple.jpg",
    category: "Special",
    dh: "yes",
  },
  {
    id: 19,
    title: "Wedding Ceremony + with additional poojas",
    memberprice: "$401",
    nonmemberprice: "$451",
    devoteehomeprice: "$501",
    time: "9:00 AM - 9:00 PM",
    location: "Temple Complex",
    description:
      "A traditional Hindu wedding ceremony, conducted by a priest, is a deeply symbolic and spiritual event rooted in Vedic rituals. It’s not just a union of two individuals but a sacred bond between two souls and their families, often performed in Sanskrit with explanations in the local language for guests to follow along.",
    image: "/images/events/temple.jpg",
    category: "Special",
    dh: "yes",
  },
  {
    id: 20,
    title: "Baby Shower",
    memberprice: "$101",
    nonmemberprice: "$121",
    devoteehomeprice: "$151",
    time: "9:00 AM - 9:00 PM",
    location: "Temple Complex",
    description:
      "A traditional Hindu baby shower, often called Seemantham, Godh Bharai, or Valaikappu depending on the region, is a sacred prenatal ritual conducted by a priest to bless the expectant mother and her unborn child. It’s a beautiful blend of spiritual protection, emotional support, and cultural celebration.",
    image: "/images/events/temple.jpg",
    category: "Special",
    dh: "yes",
  },
  {
    id: 21,
    title: "Sraadh Karma (Last Rites)",
    memberprice: "$101",
    nonmemberprice: "$121",
    devoteehomeprice: "$151",
    time: "Weekend (Saturday or Sunday), 1 hour/week",
    location: "Temple Complex",
    description:
      "Śrāddha Karma, or Hindu last rites, is a sacred ritual performed by a priest to honor and aid the soul of a departed loved one on its journey to the afterlife. Rooted in Vedic tradition, it’s both a spiritual duty and an act of deep familial devotion, typically carried out by the eldest son or a close male relative.",
    image: "/images/services/archana.jpg",
    category: "Spiritual",
    dh: "yes",
  },
  {
    id: 22,
    title: "Navagraha Pooja + Havan",
    memberprice: "$151",
    nonmemberprice: "$175",
    devoteehomeprice: "$201",
    time: "9:00 AM - 9:00 PM",
    location: "Temple Complex",
    description:
      "Navagraha Pooja and Havan is a powerful Vedic ritual performed by a Hindu priest to appease the Navagrahas—the nine planetary deities believed to influence every aspect of human life. ",
    image: "/images/events/temple.jpg",
    category: "Special",
    dh: "yes",
  },
  {
    id: 23,
    title: "Saharsranama Archana/Pooja (1000 Japa)",
    memberprice: "$101",
    nonmemberprice: "$121",
    devoteehomeprice: "N/A",
    time: "Weekend (Saturday or Sunday), 1 hour/week",
    location: "Temple Complex",
    description:
      "Sahasranama Archana, often referred to as the 1000-name offering ritual, is a deeply devotional practice in which a Hindu priest chants the Sahasranama Stotra—a litany of a deity’s thousand names—while making symbolic offerings.",
    image: "/images/services/archana.jpg",
    category: "Spiritual",    
  },
  {
    id: 24,
    title: "Special Occasions (50th / 60th birthday etc)",
    memberprice: "$101",
    nonmemberprice: "$121",
    devoteehomeprice: "N/A",
    time: "9:00 AM - 9:00 PM",
    location: "Temple Complex",
    description:
      "Any occasions or Milestone birthdays like the 50th (Swarna Shanti) and 60th (Shashti Poorthi) are celebrated with sacred rituals conducted by priests to mark spiritual rebirth, longevity, and gratitude for life’s blessings",
    image: "/images/events/temple.jpg",
    category: "Special",
  },
  {
    id: 25,
    title: "Death Ceremony",
    memberprice: "As per your wish or capacity",
    nonmemberprice: "As per your wish or capacity",
    devoteehomeprice: "As per your wish or capacity",
    time: "9:00 AM - 9:00 PM",
    location: "Temple Complex",
    description:
      "A Hindu death ceremony, known as Antyesti or “last rites,” is a sacred ritual performed by a priest to honor the soul’s journey after death. It’s a deeply spiritual process rooted in the belief of reincarnation and the liberation of the soul (moksha).",
    image: "/images/events/temple.jpg",
    category: "Special",
    dh: "yes",
  },
  
];

export default function ServicesPage() {
  const [expandedId, setExpandedId] = useState(null);

  const handleToggle = (id) => {
    //console.log("Clicked card ID:", id);
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const [openModalId, setOpenModalId] = useState(null);

  const handleOpenModal = (id) => {
      setOpenModalId(id);
    };

    const handleCloseModal = () => {
      setOpenModalId(null);
    };

   return (
    <Box>
      <PageHero title="Temple Services" icon={EventIcon} />
  <Container maxWidth="lg" sx={{ py: 2,mb:0 }}>
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
            Our Sacred Services
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            Discover our range of traditional Hindu services and rituals. From
            daily pujas to special ceremonies, we offer various ways to connect
            with the divine and maintain our cultural traditions.
          </Typography>
        </Box>
  </Container>



  <Container maxWidth="lg" sx={{ bgcolor: "#f5f5f5",boxShadow:4,borderRadius:1,py: 2,mt: 0,mb:2 }}>
        {/* Introduction */}


  

        {/* Events Grid */}
        {/* <Grid container spacing={4}>
          {services.map((event) => (
            <Grid item xs={12} md={4} key={event.id}>
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
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Box
                    onClick={() => {
                      //console.log("Clicked:", event.title);
                      handleToggle(event.id)
                    }}
                    sx={{
                      cursor: "pointer",
                      mb: 2,
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: expandedId === event.id ? "primary.main" : "text.primary",
                      }}
                    >
                      {event.title}                      
                    </Typography>
                    <ExpandMoreIcon
                      sx={{
                        transform: expandedId === event.id ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                        color: "text.secondary",
                      }}
                       />
                  </Box>

                  <Collapse in={expandedId === event.id} timeout="auto" unmountOnExit>    
                     <AttachMoney
                        sx={{ fontSize: 20, mr: 1, color: "#E85D04" }}
                      />               
                      <Typography variant="h6" sx={{ color: "text.secondary", mb: 2 }}>
                        At Temple
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 1 }}>Member Price: {event.memberprice}</Typography>
                      <Typography variant="body2" sx={{ mb: 2 }}>Non Member Price: {event.nonmemberprice}</Typography>
                      
                      <Typography variant="h6" sx={{ color: "text.secondary", mb: 2 }}>
                        At Devotee’s Home
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 2 }}>Price: {event.devoteehomeprice}</Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        {event.description}
                      </Typography>
                    </Collapse>
                  
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid> */}

        <Grid container spacing={4}>
  {services.map((event) => (
    <Grid item xs={12} md={4} key={event.id}>
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
          textAlign: "center"          
        }}
      >
        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          {/* Clickable title to open modal */}
          <Box
            onClick={() => handleOpenModal(event.id)}
            sx={{
              cursor: "pointer",
              mb: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              gutterBottom
              variant="h6"
              sx={{
                fontWeight: 600,
                color: "text.primary"
              }}
            >
              {event.title}
            </Typography>
            {/* <ExpandMoreIcon
              sx={{
                transition: "transform 0.3s ease",
                color: "text.secondary",
              }}
            /> */}
          </Box>
        </CardContent>
      </Card>

      {/* Modal Section */}
      <Modal
        open={openModalId === event.id}
        onClose={handleCloseModal}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            bgcolor: "background.paper",
            p: 4,
            borderRadius: 2,
            boxShadow: 24,
            maxWidth: "500px",
            width: "100%",
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            {event.title}
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {event.description}
          </Typography>

          {/* <AttachMoney sx={{ fontSize: 20, mr: 1, color: "#E85D04" }} /> */}
          <Typography variant="h6" sx={{ color: "text.secondary", mb: 2 }}>
            Price At Temple
          </Typography>
          <Typography variant="body2">Member Price: <strong>{event.memberprice}</strong></Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>Non Member Price: <strong>{event.nonmemberprice}</strong></Typography>

          <Typography variant="h6" sx={{ color: "text.secondary", mb: 2 }}>
            Price At Devotee’s Home
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>Price: <strong>{event.devoteehomeprice}</strong></Typography>

          
          {event.dh === "yes" && (
            <Typography variant="body2" color="text.secondary">
           <ul style={{ paddingLeft: "1.2em" }}>
              <li>
                All pooja performed at the devotee's home must pay the charges mentioned below in addition to the pooja fee.
                <ul style={{ paddingLeft: "1.2em", listStyleType: "circle" }}>
                    <li>
                      Within Montgomery, Pike Road, Wetumpka, Prattville, and Millbrook must pay $20 for mileage in case you can’t arrange for priest travel.
                    </li>
              </ul>
              </li>
            
              <li>
                Transportation is to be provided by devotees for Priest, for all services at home outside Montgomery, Pike Road, Wetumpka.
              </li>
              <li>
                For Pooja details call Priest Ujas Pancholi at 254-718-7354 and Pooja Samagris can be provided at additional cost.
              </li>
              <li>
                Donations are preferred by check. All contributions are tax-deductible.
              </li>              
              <li>
                If any devotee would like to provide food to their guests while performing pooja should pay cleaning charges.
              </li>
              <li>
                For any pooja at the temple if the guest count exceeds 60 then the devotee must pay $150 for utilizing the property and $150 in cleaning charges.
              </li>
            </ul>
          </Typography>)}

          <Button variant="contained" sx={{ mt: 2 }} onClick={handleCloseModal}>
            Close
          </Button>
        </Box>
      </Modal>
    </Grid>
  ))}
</Grid>
</Container>

<Container maxWidth="lg" sx={{ display: "flex", justifyContent: "flex-start",py: 2,mt: 0,mb:0 }}>
  <Box sx={{ 
    mb: 6,
    textAlign: "left"
   }}>
    <Typography
      gutterBottom
      variant="h6"
      sx={{
        fontWeight: 600,
        color:"text.primary",
      }}    >
          Also please read below              
    </Typography>
  <Typography
    variant="body1"
    component="div"
    sx={{
      color: "text.secondary",
      maxWidth: "800px",
      mx: "auto",
    }}
  >
    <ul style={{ paddingLeft: "1.2em" }}>
      
      <li>
        Donations are preferred by check. All contributions are tax-deductible.
      </li>
      <li>
        <strong>Temple performs Satyanarayana Pooja on every Poornima for $51.</strong>
      </li>
      <li>
        <strong>Shravan Month Mondays Linga abhishekam (Rudri), if the priest is involved, is $51.</strong>
      </li>
      <li>
        Membership fees per year is <strong>$101</strong>.
      </li>
      <li>
        Membership fees with a package (1 Satyanarayan Pooja, 1 Archana) is <strong>$151</strong> and devotees cannot choose any poornima or festival days, also please check the priest for availability.
      </li>
      <li>
        If any devotee would like to provide food to their guests while performing pooja should pay cleaning charges.
      </li>
      <li>
        For any pooja at the temple if the guest count exceeds 60 then the devotee must pay $150 for utilizing the property and $150 in cleaning charges.
      </li>
    </ul>
  </Typography>  
  </Box>
  </Container>
    </Box>
  );
 
}
