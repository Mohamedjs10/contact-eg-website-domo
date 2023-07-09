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
import Service from "./Service.jsx";
import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";
export default function SideDrawer({ state, setState }) {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  const toggleDrawer = () => () => {
    setState((prev) => !prev);
  };
  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const handleClick3 = () => {
    setOpen3(!open3);
  };

  return (
    <div>
      {/* <Button onClick={toggleDrawer()}>right</Button> */}
      <Drawer
        anchor={locale === "en" ? "left" : "right"}
        open={state}
        onClose={toggleDrawer()}
        dir={locale === "en" ? "ltr" : "rtl"}
        sx={{ zIndex: "9999999 !important" }}
      >
        <Box
          sx={{
            width: { xs: 300, sm: 300 },
            "& span": { textAlign: locale === "en" ? "left" : "right" },
          }}
          role="presentation"
          // onClick={toggleDrawer()}
        >
          <List>
            {/* A ---------------------------------------------------------*/}
            <ListItem disablePadding>
              <ListItemButton onClick={handleClick1}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={t.secondary_nav.financial_services} />
                {open1 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={open1} timeout="auto" unmountOnExit>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, m: "7px" }}>
                {t.home_page.services.All.map(
                  ({ color, title, description, img, url }, index) => (
                    <Service
                      url={url}
                      key={index}
                      color={color}
                      title={title}
                      description={description}
                      img={img}
                      // for side drawer toggle (close after click service)
                      setState={setState}
                    />
                  )
                )}
              </Box>
            </Collapse>
            {/* B ---------------------------------------------------------*/}
            <ListItem disablePadding>
              <ListItemButton onClick={handleClick3}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={t.secondary_nav.insurance_services} />

                {open3 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={open3} timeout="auto" unmountOnExit>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  m: "7px",
                }}
              >
                <Box
                  component="a"
                  target="_blank"
                  href="https://sarwa.insurance/sarwa-insurance/product/homeInsurance/"
                  sx={{
                    textDecoration: "none",
                    m: "auto",
                    color: "#233266",
                  }}
                  onClick={() => {
                    setState((prev) => !prev);
                  }}
                >
                  {t.secondary_nav.insurance_services_dropdown.home}
                </Box>
                <Box
                  component="a"
                  target="_blank"
                  href="https://sarwa.insurance/sarwa-insurance/product/motorInsurance/"
                  sx={{
                    textDecoration: "none",
                    m: "auto",
                    color: "#233266",
                  }}
                  onClick={() => {
                    setState((prev) => !prev);
                  }}
                >
                  {t.secondary_nav.insurance_services_dropdown.motor}
                </Box>
                <Box
                  component="a"
                  target="_blank"
                  href="https://sarwa.insurance/sarwa-insurance/product/personalAccidents/"
                  sx={{
                    textDecoration: "none",
                    m: "auto",
                    color: "#233266",
                  }}
                  onClick={() => {
                    setState((prev) => !prev);
                  }}
                >
                  {t.secondary_nav.insurance_services_dropdown.personal}
                </Box>
                <Box
                  component="a"
                  target="_blank"
                  href="https://sarwa.insurance/sarwa-insurance/product/propertyInsurance/"
                  sx={{ textDecoration: "none", m: "auto", color: "#233266" }}
                  onClick={() => {
                    setState((prev) => !prev);
                  }}
                >
                  {t.secondary_nav.insurance_services_dropdown.property}
                </Box>
                <Box
                  component="a"
                  target="_blank"
                  href="https://sarwa.insurance/sarwa-insurance/product/engineeringInsurance/"
                  sx={{ textDecoration: "none", m: "auto", color: "#233266" }}
                  onClick={() => {
                    setState((prev) => !prev);
                  }}
                >
                  {t.secondary_nav.insurance_services_dropdown.engineering}
                </Box>
                <Box
                  component="a"
                  target="_blank"
                  href="https://sarwa.insurance/sarwa-insurance/product/motorFleetInsurance/"
                  sx={{ textDecoration: "none", m: "auto", color: "#233266" }}
                  onClick={() => {
                    setState((prev) => !prev);
                  }}
                >
                  {t.secondary_nav.insurance_services_dropdown.motor_fleet}
                </Box>
                <Box
                  component="a"
                  target="_blank"
                  href="https://sarwa.insurance/sarwa-insurance/product/marineInsurance/"
                  sx={{ textDecoration: "none", m: "auto", color: "#233266" }}
                  onClick={() => {
                    setState((prev) => !prev);
                  }}
                >
                  {t.secondary_nav.insurance_services_dropdown.marine}
                </Box>
                <Box
                  component="a"
                  target="_blank"
                  href="https://sarwa.insurance/sarwa-insurance/product/publicLiabilityInsurance/"
                  sx={{ textDecoration: "none", m: "auto", color: "#233266" }}
                  onClick={() => {
                    setState((prev) => !prev);
                  }}
                >
                  {t.secondary_nav.insurance_services_dropdown.liability}
                </Box>
                <Box
                  component="a"
                  target="_blank"
                  href="https://sarwa.insurance/sarwa-insurance/product/medicalInsurance/"
                  sx={{ textDecoration: "none", m: "auto", color: "#233266" }}
                  onClick={() => {
                    setState((prev) => !prev);
                  }}
                >
                  {t.secondary_nav.insurance_services_dropdown.medical}
                </Box>
              </Box>
            </Collapse>
            {/* C ---------------------------------------------------------*/}
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  router.push("/e-payment");
                  setState((prev) => !prev);
                }}
              >
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary={t.secondary_nav.e_payments} />
              </ListItemButton>
            </ListItem>
            {/* D ---------------------------------------------------------*/}
            <ListItem disablePadding>
              <ListItemButton onClick={handleClick2}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={t.secondary_nav.clients_program} />
                {/* <ListItemText primary={t.secondary_nav.insurance_services} /> */}

                {open2 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={open2} timeout="auto" unmountOnExit>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, m: "7px" }}>
                {t.home_page.services.C.map(
                  ({ color, title, description, img, url }, index) => (
                    <Service
                      url={url}
                      key={index}
                      color={color}
                      title={title}
                      description={description}
                      img={img}
                      // for side drawer toggle (close after click service)
                      setState={setState}
                    />
                  )
                )}
                {t.home_page.services.D.map(
                  ({ color, title, description, img, url }, index) => (
                    <Service
                      url={url}
                      key={index}
                      color={color}
                      title={title}
                      description={description}
                      img={img}
                      // for side drawer toggle (close after click service)
                      setState={setState}
                    />
                  )
                )}
              </Box>
            </Collapse>

            {/* E ---------------------------------------------------------*/}
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText
                  primary={t.secondary_nav.investment_and_savings}
                />
              </ListItemButton>
            </ListItem>
            {/* F ---------------------------------------------------------*/}
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  router.push("#map");
                  setState((prev) => !prev);
                }}
              >
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary={t.secondary_nav.branches_location} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  );
}
