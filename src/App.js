import Counter from "./components/Counter";
import DeincreaseCounter from "./components/DeincreaseCounter";
import IncreaseByTwoCounter from "./components/IncreaseByTwoCounter";
import IncreaseCounter from "./components/IncreaseCounter";

function App() {
  return (
    <div>
      <Counter></Counter>
      <IncreaseCounter></IncreaseCounter>
      <DeincreaseCounter></DeincreaseCounter>
      <IncreaseByTwoCounter></IncreaseByTwoCounter>
    </div>
  );
}

export default App;
