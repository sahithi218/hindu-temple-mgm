"use client";

import { Box } from "@mui/material";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

export default function Template({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: "100%",
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
