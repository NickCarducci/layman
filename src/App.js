import React from "react";
import "./styles.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div
          onClick={this.props.setWhy}
          style={{
            userSelect: "none",
            border: "2px solid",
            backgroundColor: "rgb(65, 90, 159)",
            color: "white",
            borderRadius: "10px",
            padding: "4px 6px",
            cursor: "pointer",
            position: "fixed",
            right: "20px"
          }}
        >
          -
        </div>
      </div>
    );
  }
}
