// IMPORTANT : 'props' readonly !!!!!
export function Greetings(props) {
  console.log(props);

  let title = "Greetings component";
  props.doSomething();

  return (
    <>
      <h1>{title}</h1>
      <ul>
        <li>Hello {props.firstName}</li>
        <li>!</li>
        <li>{props.image}</li>
        <li>{props.isSunny ? <ItsSunny /> : <ItsRainy />}</li>
      </ul>
      <div>{props.children}</div>
    </>
  );
}

function ItsSunny() {
  return <p>Il fait beau :D</p>;
}

function ItsRainy() {
  return <p>Il fait moche :c</p>;
}
