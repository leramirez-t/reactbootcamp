import React, { Component } from "react";

//CSS Reacstrap
import { Badge } from "reactstrap";

class ClassGreet extends Component {
  render() {
    return (
      <>
        <div>
          <p>
            Hola {this.props.firstName} {this.props.lastName}{" "}
            <Badge color="secondary">Class Component</Badge>
          </p>
        </div>
      </>
    );
  }
}

export default ClassGreet;
