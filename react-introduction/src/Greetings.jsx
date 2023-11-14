// IMPORTANT : 'props' readonly !!!!!
export function Greetings(props) {
  console.log(props);
  return (
    <ul>
      <li>Hello {props.firstname}</li>
      <li>!</li>
      <li>{props.image}</li>
      <li>{props.children}</li>
    </ul>
  );
}
