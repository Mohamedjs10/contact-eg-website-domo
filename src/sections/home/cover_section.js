import { colors } from "../../utils/const";

export const styles = {
  btn: (theme) => ({
    p: 0,
    fontSize: { xs: "8px", sm: "8px", md: "12px", lg: "12px" },
    fontWeight: "bold",
    width: { xs: "75px", sm: "100px", md: "120px", lg: "120px" },
    minHeight: { xs: "25px", sm: "30px", md: "40px", lg: "40px" },
    mb: "60px",
    color: colors.white,
    border: `1px solid ${colors.orange}`,
    backgroundColor: colors.orange,
    borderRadius: { xs: "4px", md: "8px" },
    "&:hover": {
      border: `1px solid ${colors.orange}`,

      backgroundColor: colors.orange,
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    },
    "&:active": {
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    },
    // "&:focus": {

    //   boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    // },
  }),
  icon: (theme) => ({
    m: "8px",
    transition: ".5s",
    "&:hover": {
      transform: "scale(1.3)",
    },
  }),
};
