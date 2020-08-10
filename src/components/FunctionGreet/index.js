import React from "react";

//CSS Reacstrap
import { Badge } from "reactstrap";

function FunctionGreet(props) {
  return (
    <div>
      <h1>
        Hola {props.firstName} {props.lastName}{" "}
        <Badge color="secondary">Functional Component</Badge>
      </h1>
    </div>
  );
}
export default FunctionGreet;
