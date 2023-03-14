import React from "react";

import { colors } from "../../utils/const";

export default function Card({ icon, heading, textArr }) {
  return (
    <div className="card-box text-center p-5">
      <img width="32px" src={icon} alt={heading} />
      <h6 className="mt-3" style={{ color: colors.orange }}>
        {heading}
      </h6>
      {textArr?.map((item, idx) => (
        <p className="mt-2" key={idx} style={{ color: colors.blue }}>
          {item}
        </p>
      ))}
    </div>
  );
}
