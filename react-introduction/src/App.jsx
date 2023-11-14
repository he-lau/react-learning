// depuis v16/ 17 function !!!! plus de class
// norme pascal case

import { Greetings } from "./Greetings";

export function App() {
  // retour nombre, string, array, JSX
  // IMPORTANT : JSX toujours dans un parent !! jamais à la suite
  //return "Hello React !";
  return (
    <>
      <h1>Title</h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
      consequatur in, quam sapiente vitae vero deleniti distinctio esse quos,
      explicabo voluptas dolor. A facere, sint ab rerum ipsa quaerat animi.
      <Greetings />
    </>
  );
  // camelCase pour tous les attributs (onClick, onChange...)
  // fragment : <> </>
}
