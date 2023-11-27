import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import AppStore from "./Components/ReduxComponents/AppStore";
import Footer from "./Components/Footer";
import { useDebugValue, useEffect, useState } from "react";
import Shimmer from "./Components/Shimmer";

function App() {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setloading(false);
  };
  return (
    <Provider store={AppStore}>
      {loading ? (
        <Shimmer />
      ) : (
        <>
          <Header />
          <Body />
          <Footer />
        </>
      )}
    </Provider>
  );
}

export default App;
