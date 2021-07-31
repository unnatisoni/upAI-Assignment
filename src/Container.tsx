import React, { useState } from "react";
import { Link, Route, Router, Switch } from "react-router-dom";
import Navbar from "./Component/Navbar";
import UserCards from "./Component/UserCards";
import Dashboard from "./Page/Dashboard.page";
interface Props{
}
const Container: React.FC<Props> = (props) => {
  return (
    <div>
        <Navbar />
        <Switch>
          <Route path = {["/", "/dashboard"] } exact>
          <Dashboard />
        </Route>
        <Route path="/UserCards" exact >
         <UserCards />
        </Route>
        </Switch>
   

    </div>
);
};

Container.defaultProps = {
}

export default Container;