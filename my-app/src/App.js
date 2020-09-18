import React from "react";
import First from "./Components/FirstScreen";
import Second from "./Components/SecondScreen";
import Third from "./Components/ThirdScreen";
import Fourth from "./Components/FourthScreen";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={First} exact />
        <Route path="/second" component={Second} />
        <Route path="/third" component={Third} />
        <Route path="/four" component={Fourth} />
      </Switch>
    </main>
  );
}

export default App;
