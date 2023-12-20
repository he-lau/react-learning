import { useState } from "react";
import { AgeDisplay } from "./AgeDisplay";

export function AgeCounter(props) {
  //let age = 18;
  const [age, setAge] = useState(18);

  function increaseAge() {
    //age++;
    setAge(age + 1);
  }
  // composant rerender quand un state || props change !
  console.log("Rerender AgeCounter...");

  return (
    <>
      <button onClick={increaseAge}>Increase age</button>
      <AgeDisplay age={age} />
    </>
  );
}
