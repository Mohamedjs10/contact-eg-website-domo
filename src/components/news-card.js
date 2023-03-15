import { colors } from "../utils/const";

export const styles = {
  container: (theme) => ({ display: "flex", gap: 2, mt: 1, mb: 1 }),
  text_container: (theme) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: { xs: "200px", lg: "350px" },
    fontSize: "13px",
  }),
  link: (theme) => ({
    color: colors.ratty,
    textDecoration: "none",
    "&:hover": {
      color: colors.ratty,
    },
  }),
};
