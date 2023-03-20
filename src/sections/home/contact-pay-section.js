import { colors } from "../../utils/const";

export const styles = {
  container: (theme) => ({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: { xs: "center", md: "space-between" },
    alignItems: "center",
  }),
  img: (theme) => ({
    width: { xs: "400px" },
  }),
  text: (theme) => ({
    width: { xs: "600px" },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: { xs: "center", md: "flex-start" },
    gap: 2,
  }),
};
