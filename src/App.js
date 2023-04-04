import { useState, useEffect } from "react";
import Movie from "./components/Movie";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      {/* 
        switch가 하는일은 Route를 찾는 것 
        Route는 URL을 의미
        -> URL을 찾으면 컴포넌트를 렌더링
      */}
      <Switch>
        <Route path="/hello">
          <h1>Hello</h1> 
        </Route>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
