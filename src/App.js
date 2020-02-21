import React from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
// import Auth from "./components/auth/Auth";
// import Dashboard from "./components/dashboard/Dashboard";
// import Form from "./components/form/Form";
// import Post from "./components/post/Post";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <Nav />
      {routes}
      {/* <Auth />
      <Dashboard />
      <Form />
      <Post /> */}
    </div>
  );
}

export default App;
