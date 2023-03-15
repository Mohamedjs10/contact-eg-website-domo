import { colors } from "../utils/const";

export const styles = {
  container: (theme) => ({
    fontSize: "12px",
    width: { xs: "90px", sm: "170px", lg: "380px" },
    height: "75px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: "5px",
    pr: 2,
    pl: 2,
    // p: 2,
    // m: 2,
    mt: 1,
    mb: 1,
    pl: 3,
    transition: "1s",
    "&:hover": {
      pr: 3,
      pl: 2,
      bgcolor: colors.light_grey,
      cursor: "pointer",
    },
  }),
};
