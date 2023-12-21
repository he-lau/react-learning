import { useState } from "react";
import s from "./style.module.css";

export function MenuListItem({ onClick, difficulty, isSelected }) {
  const [isHovered, setIsHovered] = useState(false);

  function updateIsHovered(bool) {
    setIsHovered(bool);
  }

  function getBackgroundColor() {
    if (isHovered || isSelected) {
      return "#a5e9ff";
    } else {
      return "#eff0ef";
    }
  }

  console.log("isHovered", isHovered);

  return (
    <div
      onClick={() => onClick(difficulty)}
      style={{
        backgroundColor: getBackgroundColor(),
      }}
      className={s.container}
      onMouseEnter={() => updateIsHovered(true)}
      onMouseLeave={() => updateIsHovered(false)}
    >
      Set to : {difficulty}
    </div>
  );
}
