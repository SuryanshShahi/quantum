import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer"


const App = () => {

  return (
    <section>
      <div className="app">
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />

        </Switch>
        <Footer/>
      </div>
    </section>
  );
};
export default App;
