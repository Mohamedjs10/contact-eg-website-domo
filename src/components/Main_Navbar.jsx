import React from "react";
import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Button from "@mui/material/Button";

import { colors } from "../utils/const";
import { styles } from "./main_navbar.js";
import { useSelector, useDispatch } from "react-redux";
import { mainTabActions } from "../Redux/store";
export default function Main_Navbar({ setRight }) {
  const mainTab = useSelector((state) => state.mainTab.mainTab);
  const dispatch = useDispatch();

  return (
    <Box sx={styles.container} style={{}} className="horizontal-safe-padding">
      <Button>
        <MenuIcon
          sx={{
            fontSize: 40,
            color: colors.blue,
          }}
          onClick={() => {
            setRight((prev) => (prev == 0 ? -500 : 0));
          }}
        />
      </Button>

      <Box
        component={Link}
        sx={styles.tab}
        style={{
          fontWeight: mainTab === "افراد" ? "bold" : "",
          borderBottom: mainTab === "افراد" ? `2px solid ${colors.blue}` : "",
        }}
        href="/"
        onClick={() => {
          dispatch(mainTabActions.update("افراد"));
        }}
      >
        أفراد
      </Box>
      <Box
        component={Link}
        sx={styles.tab}
        style={{
          fontWeight: mainTab === "شركات" ? "bold" : "",
          borderBottom: mainTab === "شركات" ? `2px solid ${colors.blue}` : "",
        }}
        href="/"
        onClick={() => {
          dispatch(mainTabActions.update("شركات"));
        }}
      >
        شركات
      </Box>
      <Box
        component={Link}
        sx={styles.tab}
        style={{
          fontWeight: mainTab === "مستثمرين" ? "bold" : "",
          borderBottom:
            mainTab === "مستثمرين" ? `2px solid ${colors.blue}` : "",
        }}
        href="/"
        onClick={() => {
          dispatch(mainTabActions.update("مستثمرين"));
        }}
      >
        مستثمرين
      </Box>
      <Box
        component={Button}
        sx={{ color: colors.blue, fontWeight: "bold", mr: "auto" }}
      >
        En
      </Box>
    </Box>
  );
}
