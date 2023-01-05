import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const vInc = () => {
    setCount(count + 1);
  };
  const vDec = () => {
    setCount(count - 1);
  };
  return (
    <div className="container text-center">
      <h1>{count}</h1>
      <button className="btn btn-primary" onClick={vInc}>
        +
      </button>
      <button className="btn btn-danger" onClick={vDec}>
        -
      </button>
    </div>
  );
}
