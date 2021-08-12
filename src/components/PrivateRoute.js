import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
const PrivateRoute = ({ component: Component, ...rest }) => {
  // eslint-disable-next-line
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));
  return (
    <Route
      {...rest}
      render={(props) =>
        loggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
