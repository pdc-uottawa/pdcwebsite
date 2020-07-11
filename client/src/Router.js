import React, { Fragment } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import CreateProject from "./view/CreateProject/CreateProject";
import Home from "./view/Home/Home";
import Header from "./view/Header/Header";
import Footer from "./view/Footer/Footer";
import ProjectListInterface from "./view/ProjectList/ProjectListInterface";
import ProjectDeatiledPage from "./view/ProjectDetailed/ProjectDeatiledPage";
import { Container } from "semantic-ui-react";

/**
 * This is routers for the website.
 *
 * Need to solve login authentication, user can input url directly to go to the page.
 */

const Routers = () => {
  return (
    <Fragment>
      <Router>
        <Header />
        <Switch>
          <Container className="main">
            <Route exact path="/" component={Home} />
            <Route exact path="/create-project" component={CreateProject} />
            <Route
              exact
              path="/project-list"
              component={ProjectListInterface}
            />
            <Route
              exact
              path="/project-detail/:id"
              component={ProjectDeatiledPage}
            />
          </Container>
        </Switch>
        <Footer />
      </Router>
    </Fragment>
  );
};

export default Routers;
