import React from "react";

export const Atodo = props => {
  return (
    <div
      className={props.todo.completed ? "true" : "false"}
      onClick={() =>
        props.dispatch({ type: "IS_CLICKED", payload: props.todo.id })
      }
    >
      <h1>{props.todo.item}</h1>
    </div>
  );
};
