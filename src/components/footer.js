import { colors } from "../utils/const";

export const styles = {
  container: (theme) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 3,
    color: colors.blue,
    fontSize: "15px",
    fontWeight: "bold",
  }),
  sub_container: (theme) => ({
    display: "flex",
    flexDirection: "column",
  }),
  link: (theme) => ({
    pt: 2,
    color: colors.blue,
    fontSize: "10px",
    fontWeight: "normal",
    textDecoration: "none",
    "&:hover": {
      color: colors.blue,
    },
  }),
  app_section: (theme) => ({
    display: "flex",
    justifyContent: { xs: "center", md: "flex-end" },
    alignItems: "center",
    gap: 2,
  }),
  app_container: (theme) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: { xs: "center", md: "flex-start" },
    gap: 2,
  }),
  app_icons: (theme) => ({
    display: "flex",
    justifyContent: "center",

    flexWrap: "wrap",
    gap: 2,
  }),
  copyright_section: (theme) => ({
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: { xs: "center", md: "flex-start" },
    alignItems: "center",
    gap: 1,
  }),
  accrodion_title: (theme) => ({
    color: colors.blue,
    fontSize: "15px",
  }),
};
