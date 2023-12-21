import s from "./style.module.css";

export function Greetings(props) {
  //return <p className={s.box + " " + s.box2}>Salutations</p>;
  return <p className={`${s.box} ${s.box2} box`}>Salutations</p>;
}
