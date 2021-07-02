import { useDispatch } from "react-redux";
import { Actions } from "../store/actions";

export default function Counter() {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(Actions.add(5))}>+5</button>
      <button onClick={() => dispatch(Actions.increase())}>+</button>
      <button onClick={() => dispatch(Actions.decrease())}>-</button>
    </>
  );
}
