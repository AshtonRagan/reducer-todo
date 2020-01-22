import React from "react";

import { Atodo } from "./Atodo";

export default function TodoList(props) {
  return (
    <div>
      {props.state.map(ele => (
        <Atodo key={ele.id} todo={ele} dispatch={props.dispatch} />
      ))}
    </div>
  );
}
