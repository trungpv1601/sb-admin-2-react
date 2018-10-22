import React from "react";
import { routes, RouteWithSubRoutes } from "./routes";
import "./styles/sb-admin-2.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </div>
    );
  }
}

export default App;
