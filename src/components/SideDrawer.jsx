import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { services } from "../utils/data";
import Service from "./Service.jsx";

export default function SideDrawer({ state, setState }) {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const toggleDrawer = () => () => {
    setState((prev) => !prev);
  };
  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };

  return (
    <div>
      {/* <Button onClick={toggleDrawer()}>right</Button> */}
      <Drawer anchor="right" open={state} onClose={toggleDrawer()}>
        <Box
          sx={{ width: 300, "& span": { textAlign: "right" } }}
          role="presentation"
          // onClick={toggleDrawer()}
        >
          <List dir="rtl">
            {/* A ---------------------------------------------------------*/}
            <ListItem disablePadding>
              <ListItemButton onClick={handleClick1}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="خدمات تمويلية" />
                {open1 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={open1} timeout="auto" unmountOnExit>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, m: "7px" }}>
                {services.All.map(({ color, title, description, img }) => (
                  <Service
                    color={color}
                    title={title}
                    description={description}
                    img={img}
                  />
                ))}
              </Box>
            </Collapse>
            {/* B ---------------------------------------------------------*/}
            <ListItem disablePadding>
              <ListItemButton onClick={handleClick2}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="برنامج العملاء" />
                {open2 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={open2} timeout="auto" unmountOnExit>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, m: "7px" }}>
                {services.C.map(({ color, title, description, img }) => (
                  <Service
                    color={color}
                    title={title}
                    description={description}
                    img={img}
                  />
                ))}
              </Box>
            </Collapse>
            {/* C ---------------------------------------------------------*/}
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="خدمات تأمينية" />
              </ListItemButton>
            </ListItem>
            {/* D ---------------------------------------------------------*/}
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="مدفوعات الكترونية" />
              </ListItemButton>
            </ListItem>
            {/* E ---------------------------------------------------------*/}
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="إستثمار و ادخار" />
              </ListItemButton>
            </ListItem>
            {/* F ---------------------------------------------------------*/}
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="اماكن الفروع" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  );
}
