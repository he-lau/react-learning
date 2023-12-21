// depuis v16/ 17 function !!!! plus de class
// norme pascal case

import { AgeCounter } from "./AgeCounter";
//import { Greetings } from "./Greetings";
import { Car } from "./components/Car/Car";
import { Greetings } from "./components/Greetings/Greetings";

import "./global.css";

export function App() {
  // retour nombre, string, array, JSX
  // IMPORTANT : JSX toujours dans un parent !! jamais à la suite
  //return "Hello React !";
  /*
  return (
    <>
      <h1>Title (App JSX)</h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
      consequatur in, quam sapiente vitae vero deleniti distinctio esse quos,
      explicabo voluptas dolor. A facere, sint ab rerum ipsa quaerat animi.
      <Greetings
        firstName={"Jean"}
        car={{ color: "red", price: 10000 }}
        // function
        doSomething={function () {
          console.log("blablabla");
        }}
        // JSX
        image={<img src="https://picsum.photos/200/300"></img>}
        isSunny={null}
      >
        <h2>Props children</h2>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          voluptates rem exercitationem praesentium culpa, eum, enim mollitia
          nihil neque distinctio quasi autem quae quo, explicabo dignissimos vel
          molestiae sunt incidunt.
        </p>
        <br />
        <img src="https://picsum.photos/200/300" alt="" />
      </Greetings>
    </>
  );
  */

  const a = false;

  return (
    <>
      <div
        style={{
          backgroundColor: a ? "red" : "blue",
          height: "100px",
          width: 200 + 50,
        }}
      ></div>
      <Car />
      <Greetings />
      <AgeCounter />
    </>
  );
  // camelCase pour tous les attributs (onClick, onChange...)
  // fragment : <> </>
}
