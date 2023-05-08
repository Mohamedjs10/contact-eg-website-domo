import { colors } from "../../utils/const";

export const styles = {
  sectionContainer: (theme) => ({
    bgcolor: colors.white,
    display: "flex",
    justifyContent: { xs: "flex-start", sm: "space-between" },
    // alignItems: { xs: "flex-start", sm: "space-between" },
    flexWrap: "wrap",
    gap: 5,
  }),
  container: (theme) => ({
    display: "flex",
    gap: 1,
    justifyContent: "start",

    alignItems: "center",
    width: "350px",
  }),
  title: (theme) => ({
    color: colors.blue,
    fontSize: { xs: "12px", sm: "20px" },
    // textAlign: { xs: "center", sm: "initial" },
    textAlign: "initial",
    fontWeight: "bold",
  }),
  description: (theme) => ({
    color: colors.blue,
    fontSize: { xs: "8px", sm: "12px" },
    // textAlign: { xs: "center", sm: "initial" },
    textAlign: "initial",
    fontWeight: "bold",
  }),
  imgContainer: (theme) => ({
    borderRadius: "50%",
    bgcolor: "#EBEBED",
  }),
};
