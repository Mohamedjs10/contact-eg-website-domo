import { styles } from "./navbar";
import Main_Navbar from "../components/Main_Navbar.jsx";
import Secondary_Navbar from "../components/Secondary_Navbar.jsx";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Drawer } from "@mui/material";
import { colors } from "../utils/const";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import SideDrawer from "../components/SideDrawer.jsx";

export default function Navbar({ setRight, setIsOPen, state, setState }) {
  const matches = useMediaQuery("(max-width:900px)");

  return (
    <>
      {/* large screens ---------------------------------------------------------------------- */}

      {!matches && (
        <>
          <Main_Navbar setRight={setRight}></Main_Navbar>
          <Secondary_Navbar setIsOPen={setIsOPen}></Secondary_Navbar>
        </>
      )}

      {/* small screens ---------------------------------------------------------------------- */}
      {matches && (
        <>
          <Box
            className="horizontal-safe-padding vertical-safe-padding"
            sx={{
              bgcolor: colors.dark_grey,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <IconButton
              sx={{ color: colors.blue }}
              onClick={() => {
                setState((prev) => !prev);
              }}
            >
              <MenuIcon />
            </IconButton>
            <img src="logo.png" width="50px" height="20px" />
            <Box
              component={Button}
              sx={{ color: colors.blue, fontWeight: "bold" }}
            >
              En
            </Box>
          </Box>
          <SideDrawer state={state} setState={setState} />
        </>
      )}
    </>
  );
}
