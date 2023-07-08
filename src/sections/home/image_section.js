import { colors } from "../../utils/const";

export const styles = {
  container: (theme) => ({
    bgcolor: "#F8F8F8",
  }),
  grid: (theme) => ({
    display: "grid",
    // gridTemplateColumns: "auto auto auto auto",
    gridTemplateColumns: { xs: "auto auto", sm: "repeat(auto-fill, 300px)" },
    justifyContent: { xs: "center", md: "space-between" },
    gridGap: 25,
    pt: 2,
    pb: 2,
  }),
};
