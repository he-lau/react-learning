import { MenuListItem } from "../MenuListItem/MenuListItem";
import s from "./style.module.css";

export function MenuList({ difficulty, onItemClick }) {
  return (
    <div className={s.container}>
      <MenuListItem
        isSelected={difficulty === "Low"}
        onClick={onItemClick}
        difficulty={"Low"}
      />
      <MenuListItem
        isSelected={difficulty === "Medium"}
        onClick={onItemClick}
        difficulty={"Medium"}
      />
      <MenuListItem
        isSelected={difficulty === "Hard"}
        onClick={onItemClick}
        difficulty={"Hard"}
      />
    </div>
  );
}
