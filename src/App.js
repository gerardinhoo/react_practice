import React from "react";
import Navbar from "./components/Navbar"
import Home from "./components/Home";
import About from "./components/About"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import data from "./data";


let mapData = data.map((data) => {
  return (
    <div key={data.id}>
      <p>{data.fullName}</p>
      <img src={data.image} alt="profile" style={{ width: "200px" }} />
      <p>{data.nationality}</p>
    </div>
  )
})

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/about"
              component={() => (
                <About
                  name={mapData.fullName}
                  image={mapData}
                  nationality={mapData}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}



