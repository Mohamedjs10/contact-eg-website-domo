import { colors } from "../utils/const";

export const styles = {
  container: (theme) => ({
    fontSize: "12px",
    maxWidth: { xs: "90px", md: "170px", lg: "380px" },
    minWidth: { xs: "90px", md: "0px" },
    height: "75px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: "5px",
    // pr: { xs: 1, md: 2, lg: 2 },
    // pl: { xs: 1.5, md: 3, lg: 3 },
    pr: 2,
    pl: 3,
    mt: 1,
    mb: 1,

    transition: "1s",
    "&:hover": {
      // pr: { xs: 1.5, md: 3, lg: 3 },
      // pl: { xs: 1, md: 2, lg: 2 },
      pr: 3,
      pl: 2,
      bgcolor: colors.light_grey,
      cursor: "pointer",
    },
  }),
};
