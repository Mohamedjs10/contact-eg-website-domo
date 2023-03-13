import { colors } from "../utils/const";

export const styles = {
  container: (theme) => ({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 3,
    color: colors.blue,
    bgcolor: colors.light_light,
    fontSize: 30,
    "&:hover": {},
  }),
  tab: (theme) => ({
    color: colors.blue,
    fontSize: 30,
    borderBottom: "2px solid white",
    textDecoration: "none",
    "&:hover": {
      borderBottom: "2px solid red",
    },
  }),
};
