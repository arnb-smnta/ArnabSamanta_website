import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import AppStore from "./Components/ReduxComponents/AppStore";

function App() {
  return (
    <Provider store={AppStore}>
      <>
        <Header />
        <Body />
      </>
    </Provider>
  );
}

export default App;
