import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/navigation/Nav";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Login from "./components/authentication/login/Login";
import UserForm from "./components/authentication/register/UserForm";
import Dashboard from "./components/dashboard/Dashboard";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={UserForm} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
