import React from "react";
import Home from "./components/pages/Home/index";
import { Provider } from 'react-redux';
import store from "./store";



function App() {
  return (
    <div>
      <Provider store={store}>
        <Home />
      </Provider>
      
    </div>
  );
}

export default App;
