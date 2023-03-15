import { colors } from "../utils/const";

export const styles = {
  btn: (theme) => ({
    color: colors.white,
    border: `1px solid ${colors.orange}`,
    backgroundColor: colors.orange,
    borderRadius: "8px",
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
