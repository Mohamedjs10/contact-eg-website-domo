import React from "react";

import { colors } from "../../utils/const";
import CountUp from "react-countup";

export default function Statistics({ num, word, text }) {
  return (
    <div className="statistics-box text-center p-5">
      <h2 style={{ color: colors.orange }}>
        <CountUp suffix={` ${word} `} start={0} end={num} duration={4} />
      </h2>
      <p style={{ color: colors.blue }}>{text}</p>
    </div>
  );
}
