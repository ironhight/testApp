import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//core components
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";

//page
import { routesHome } from "./routes";

function App() {
  const showMenuHome = routes => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <Route
            key={index}
            path={item.path}
            exact={item.exact}
            component={item.component}
          />
        );
      });
    }
  };

  return (
    <>
      <BrowserRouter>
        <Header />
        <SideBar />
        <Switch>{showMenuHome(routesHome)}</Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
