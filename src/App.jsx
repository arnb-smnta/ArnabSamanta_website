import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import AppStore from "./Components/ReduxComponents/AppStore";
import Footer from "./Components/Footer";

function App() {
  return (
    <Provider store={AppStore}>
      <>
        <Header />
        <Body />
        <Footer />
      </>
    </Provider>
  );
}

export default App;
