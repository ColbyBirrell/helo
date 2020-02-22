import React from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
// import Auth from "./components/auth/Auth";
// import Dashboard from "./components/dashboard/Dashboard";
// import Form from "./components/form/Form";
// import Post from "./components/post/Post";
import routes from "./routes";
import { withRouter } from "react-router-dom";

function App(props) {
  return (
    <div className="App">
      {props.location.pathname === "/" ? (
        <>{routes}</>
      ) : (
        <>
          <Nav />
          {routes}
        </>
      )}
    </div>
  );
}

export default withRouter(App);
