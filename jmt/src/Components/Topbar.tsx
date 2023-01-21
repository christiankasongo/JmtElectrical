import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import Logo from "../assets/logo.png";
import ElectricBoltTwoToneIcon from "@mui/icons-material/ElectricBoltTwoTone";

const navItems = ["Home", "About", "Services", "Contact"];
export default function Topbar() {
  return (
    <AppBar style={{ background: "#2c2b2b" }} position="fixed">
      <Toolbar>
        <Box
          component="img"
          sx={{
            height: 64
          }}
          alt="JMT Logo"
          src={Logo}
        />
        <Box sx={{ display: { xs: "none", sm: "block" }, marginLeft: "auto" }}>
          {navItems.map(item => (
            <Button key={item} sx={{ color: "#fff" }}>
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
