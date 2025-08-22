"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Box,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { title: "Home", path: "/" },
  { title: "Calendar", path: "/calendar" },
  { title: "Events", path: "/events" },
  { title: "Services", path: "/services" },
  { title: "Donate", path: "/donate" },
  { title: "Membership", path: "/membership" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Annual Cultural Event", path: "/annualEvent" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const pathname = usePathname();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path) => pathname === path;

  const drawer = (
    <List sx={{ pt: 2 }}>
      {navItems.map((item) => (
        <Link
          href={item.path}
          key={item.title}
          passHref
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <ListItemButton
            onClick={handleDrawerToggle}
            sx={{
              borderRadius: 1,
              mx: 1,
              mb: 0.5,
              backgroundColor: isActive(item.path)
                ? "primary.light"
                : "transparent",
              color: isActive(item.path) ? "primary.main" : "inherit",
              "&:hover": {
                backgroundColor: "primary.light",
                color: "primary.main",
              },
            }}
          >
            <ListItemText
              primary={item.title}
              primaryTypographyProps={{
                fontWeight: isActive(item.path) ? 600 : 400,
              }}
            />
          </ListItemButton>
        </Link>
      ))}
    </List>
  );

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "linear-gradient(135deg, #E85D04 0%, #F48C06 100%)",
        borderBottom: "1px solid",
        borderColor: "rgba(255,255,255,0.1)",
      }}
    >
      <Toolbar sx={{ px: { xs: 2, md: 4 }, height: 90, width: "100%" }}>
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              color: "white",
            }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: 600,
            color: "white",
            textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
          }}
        >
          <Link href="/" style={{ textDecoration: "none", color: "white" }}>
            {" "}
            Hindu Temple of Montgomery{" "}
          </Link>
          <Typography
            variant="body2"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 300,
              color: "white",
              textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
              fontSize: 11,
            }}
          >
            A 501(c)(3) Non - Profit Organization , Tax ID:63-0966971
            <br />
            2005 Meriwether Rd, Pike Road, AL - 36064
          </Typography>
        </Typography>

        {!isMobile && (
          <Box sx={{ display: "flex", gap: 1 }}>
            {navItems.map((item) => (
              <Link
                href={item.path}
                key={item.title}
                passHref
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{
                    position: "relative",
                    fontWeight: isActive(item.path) ? 600 : 400,
                    color: "white",
                    opacity: isActive(item.path) ? 1 : 0.9,
                    px: 2,
                    "&:hover": {
                      opacity: 1,
                      backgroundColor: "rgba(255,255,255,0.1)",
                    },
                    "&:after": {
                      content: '""',
                      position: "absolute",
                      width: isActive(item.path) ? "100%" : "0%",
                      height: "2px",
                      bottom: 0,
                      left: "0",
                      backgroundColor: "white",
                      transition: "width 0.2s ease-in-out",
                    },
                    "&:hover:after": {
                      width: "100%",
                    },
                  }}
                >
                  {item.title}
                </Button>
              </Link>
            ))}
          </Box>
        )}
      </Toolbar>
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            width: 280,
            borderRight: "none",
            bgcolor: "background.paper",
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
