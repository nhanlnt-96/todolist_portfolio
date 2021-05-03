import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "../containers/Home";
import Login from "../containers/Login";
import NotFound from "../containers/NotFound";
import Register from "../containers/Register";

const routes = [
  {
    path: "/",
    isExact: true,
    isPrivate: true,
    component: Home,
  },
  {
    path: "/register",
    isPrivate: false,
    component: Register,
  },
  {
    path: "/login",
    isPrivate: false,
    component: Login,
  },
  {
    path: "*",
    isExact: true,
    component: NotFound,
  },
];

const renderComponent = (Component, isPrivate, isLogged) => () => {
  if (isPrivate) {
    return isLogged ? <Component /> : <Redirect to="/login" />;
  }
  return <Component />;
};

const RouterOutlet = () => {
  const isLogged = true;
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.isExact}
              render={renderComponent(
                route.component,
                route.isPrivate,
                isLogged
              )}
            />
          );
        })}
      </Switch>
    </Router>
  );
};

export default RouterOutlet;
