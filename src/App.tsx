import { Provider } from "react-redux";
import { store } from "./store";
import Counter from "./components/Counter";
import Controls from "./components/Controls";
import "./styles.css";

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
      <Controls />
    </Provider>
  );
}
