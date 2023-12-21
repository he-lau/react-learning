export function Car(props) {
  function onClick() {
    props.onCarClick(5);
  }
  //return <p className="box">Je suis une voiture</p>;
  return (
    <div>
      Je suis {"<Car/>"}
      <button onClick={() => props.onCarClick(5)}>click</button>
    </div>
  );
}
