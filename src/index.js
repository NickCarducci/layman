import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import App from "./App";
import Front from "./Front.js";

class PathRouter extends React.Component {
  state = { why: true };
  componentDidUpdate = () => {
    const { pathname } = this.state;
    if (this.state.lastPathname !== pathname && pathname) {
      this.setState({ lastPathname: pathname }, () => {
        this.toPathname(pathname);
      });
    }
  };
  toPathname = (pathname) => {
    this.setState({ pathname });
  };
  render() {
    /**
     * Cloud Run comes with a generous free tier and is pay per use,
     * which means you only pay while a request is being handled on your container instance.
     * If it is idle with no traffic, then you don’t pay anything.
     * https://cloud.google.com/blog/topics/developers-practitioners/cloud-run-story-serverless-containers
     * Because jobs should not serve requests, the container should not listen on a port or start a web server.
     * https://cloud.google.com/run/docs/container-contract#jobs-exit
     *  The user-provided container failed to start and listen on the port defined provided by the PORT=8080 environment variable.
     * Container called exit(1).
     */
    return (
      <Route
        render={({ location, history }) => {
          if (location.pathname !== this.state.pathname) {
            clearTimeout(this.pauseRender);
            this.pauseRender = setTimeout(() => {
              this.setState({ pathname: location.pathname, history }, () => {
                if (location.state && location.state.statePathname) {
                  this.setState({
                    statePathname: location.state.statePathname
                  });
                }
              });
            }, 200);
          }
          return (
            <TransitionGroup key="1">
              <CSSTransition key="1" timeout={300} classNames={"fade"}>
                <Switch key={location.key} location={location}>
                  <Route
                    //exact
                    path="/"
                    render={(props) =>
                      this.state.why ? (
                        <Front setWhy={() => this.setState({ why: false })} />
                      ) : (
                        <App
                          setWhy={() => this.setState({ why: true })}
                          pathname={this.state.pathname}
                          openNROP={() =>
                            this.setState({ why: true }, () =>
                              window.scrollTo(0, 0)
                            )
                          }
                        />
                      )
                    }
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          );
        }}
      />
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <PathRouter />
  </BrowserRouter>,
  rootElement
);
