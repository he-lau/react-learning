import { MenuListItem } from "../MenuListItem/MenuListItem";
import s from "./style.module.css";
import { DIFFICULTIES } from "./constants";

export function MenuList({ difficulty, onItemClick }) {
  let menuListItemArray = DIFFICULTIES.map((item, index) => {
    return (
      <MenuListItem
        isSelected={difficulty === item}
        onClick={onItemClick}
        difficulty={item}
      />
    );
  });

  return <div className={s.container}>{menuListItemArray}</div>;
}
