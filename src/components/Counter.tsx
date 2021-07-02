import { useSelector } from "react-redux";
import { CounterState } from "../store/reducers/root";

export default function Counter() {
  const counter = useSelector((state: CounterState) => state.counter);

  return <div>{counter}</div>;
}
