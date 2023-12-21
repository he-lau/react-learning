import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty";
import { MenuList } from "./components/MenuList/MenuList";
import { MenuListItem } from "./components/MenuListItem/MenuListItem";
import React, { useEffect, useState } from "react";
import s from "./style.module.css";

export function App() {
  const [currentDifficulty, setCurrentDifficulty] = useState("");

  function updateDifficulty(difficulty) {
    setCurrentDifficulty(difficulty);
  }

  return (
    <div>
      {
        //Hello {"<App/>"}
      }

      {/*
      <DisplayDifficulty difficulty={null} />
              <MenuListItem difficulty="Low" />

       */}
      <h1 className={s.title}>Select a difficulty</h1>
      <div className={s.workspace}>
        <MenuList
          onItemClick={updateDifficulty}
          difficulty={currentDifficulty}
        />
        <DisplayDifficulty difficulty={currentDifficulty} />
      </div>
    </div>
  );
}
