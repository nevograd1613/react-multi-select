import React from "react";
import { TickOutline } from "react-icons/lib/ti/tick-outline";
import { Tick } from "react-icons/lib/ti/tick";

import style from "./item_style.scss";

const Item = ({ item, checked, height }) => {
  return (
    <div
      className={style.item}
      style={{
        height,
        backgroundImage: `url(${item.img})`,
      }}
    >
      <div className={`${style.icon} ${checked ? style.icon_checked : ""}`}>
        {!checked ? (
          <TickOutline color={!checked ? "#41B6E6" : ""} />
        ) : (
          <Tick color={checked ? "#fff" : ""} />
        )}
      </div>
      <div className={style.label}>{item.label}</div>
    </div>
  );
};

export default Item;
