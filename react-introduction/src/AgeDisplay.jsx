export function AgeDisplay(props) {
  console.log("Rerender AgeDisplay...");
  return (
    <>
      <span>You are {props.age} yo.</span>
    </>
  );
}
