import React from "react";

class Front extends React.Component {
  state = { served: 0 };
  componentWillUnmount = () => {
    clearTimeout(this.hibittimeout);
    clearTimeout(this.authorGithubtimeout);
    clearTimeout(this.thumbprintTimeout);
  };
  render() {
    const space = " ";
    const chooseFeature = (
      e /* = (e, y) => {
        return {
          target: { innerText: y ? e.target.id : e.target.innerText }
          ///...Object(`{target:{innerText:${e.target[y ? "id" : "innerText"]}}}`)
        };
      }*/
    ) =>
      this.setState({
        chosenFeature:
          this.state.chosenFeature !== e.target.innerText && e.target.innerText
      });

    const cftextgradientstyle = {
      background: "linear-gradient(to right,chocolate,darkorchid)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    };
    var mbps = 12 * this.state.served;
    var goingprice = String((200 + 15) / this.state.served);
    const decimal = goingprice.lastIndexOf(".");
    //console.log(decimal);
    goingprice =
      Number(
        goingprice.substring(0, (decimal > 0 ? decimal : goingprice.length) + 1)
      ) + 1;
    return (
      <div style={{ width: "100%", maxWidth: "600px" }}>
        <div style={{ width: "100%", position: "relative" }}>
          <div
            style={{
              //zIndex: "1", i'd rather my foot in your mouth than an A+
              height: "100%",
              width: "100%",
              position: "absolute",
              backgroundColor: "rgba(80,30,160,.2)"
            }}
          >
            <span
              onMouseEnter={
                () =>
                  this.setState(
                    {
                      hibittimeout:
                        this.state.hibittimeout === true
                          ? 1
                          : !this.state.hibittimeout
                    },
                    () => {
                      clearTimeout(this.hibittimeout);
                      this.hibittimeout = setTimeout(() => {
                        this.setState({ hibittimeout: false });
                      }, 5000);
                    }
                  ) //scopebook
              }
              style={{
                transition: ".3s ease-out",
                justifyContent: "space-between",
                maxWidth: "max-content",
                width: "calc(100% - 50px)",
                zIndex: "1",
                userSelect: "none",
                backgroundColor: "rgb(65, 90, 159)",
                color: "white",
                borderRadius: "10px",
                padding: "4px 6px",
                cursor: "pointer",
                display: "flex",
                position: "fixed",
                right: "20px"
              }}
            >
              {this.state.hibittimeout === 1 ? (
                <a
                  style={{ color: "white" }}
                  href="https://github.com/w3c/strategy/issues/358"
                >
                  card
                </a>
              ) : (
                this.state.hibittimeout && (
                  <a style={{ color: "white" }} href="https://hibit.cc">
                    actua.media:
                  </a>
                )
              )}

              <span
                style={{ color: "white", paddingLeft: "6px" }}
                //onClick={this.props.setWhy}
              >
                {this.state.hibittimeout && `  `}
                hibit.cc
              </span>
            </span>
            <div
              onMouseEnter={
                () =>
                  this.setState({ authorGithubtimeout: true }, () => {
                    clearTimeout(this.authorGithubtimeout);
                    this.authorGithubtimeout = setTimeout(() => {
                      this.setState({ authorGithubtimeout: false });
                    }, 5000);
                  }) //scopebook
              }
              onClick={this.props.setWhy}
              style={{
                zIndex: "1",
                userSelect: "none",
                backgroundColor: "rgb(65, 90, 159)",
                color: "white",
                borderRadius: "10px",
                padding: "4px 6px",
                cursor: "pointer",
                position: "fixed",
                right: "20px",
                bottom: "20px"
              }}
            >
              {this.state.authorGithubtimeout && (
                <a
                  style={{ color: "white" }}
                  href="https://github.com/NickCarducci/"
                >
                  help
                </a>
              )}
              {space}
              &image;
            </div>
            <div
              onMouseEnter={
                () =>
                  this.setState({ thumbprintTimeout: true }, () => {
                    clearTimeout(this.thumbprintTimeout);
                    this.thumbprintTimeout = setTimeout(() => {
                      this.setState({ thumbprintTimeout: false });
                    }, 5000);
                  }) //scopebook
              }
              onClick={this.props.setWhy}
              style={{
                zIndex: "1",
                userSelect: "none",
                backgroundColor: "rgb(65, 90, 159)",
                color: "white",
                borderRadius: "10px",
                padding: "4px 6px",
                cursor: "pointer",
                position: "fixed",
                left: "20px",
                bottom: "20px"
              }}
            >
              &infin;{space}
              {this.state.thumbprintTimeout && (
                <a style={{ color: "white" }} href="https://thumbprint.us">
                  -
                </a>
              )}
            </div>
          </div>
          <div
            style={{
              maxWidth: "100%",
              opacity: ".6",
              position: "relative",
              width: "min-content"
            }}
          ></div>
        </div>
        Given computer network security pertaining to DDoS, doesn't W3C
        implementing an all-methods-local-proxy for concurrent-failed cors
        requests surmount facilities of config server identity platform access
        token firewalls if we could just work together?
        <br />
        <a href="https://markethistory.quora.com/Given-computer-network-security-pertaining-to-DDoS-doesnt-W3C-implementing-an-all-methods-local-proxy-for-concurrent-f">
          <i style={{ color: "grey" }}>nothing</i>
        </a>
        {/*Security Assertion Markup Language (SAML) */}
      </div>
    );
  }
}
export default Front;
