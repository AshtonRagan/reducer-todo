import React, { useState } from "react";

export const Form = props => {
  const [value, setvalue] = useState("");

  const handelChange = e => {
    return setvalue(e.target.value);
  };
  const handelSubmit = e => {
    props.dispatch({ type: "ADD_TODO", payload: value });
    setvalue("");
  };

  return (
    <div>
      <input onChange={handelChange} placeholder={"Add A Todo"} value={value} />
      <button onClick={handelSubmit}>Add</button>
      <button onClick={() => props.dispatch({ type: "REMOVE" })}>
        Remove Selected
      </button>
    </div>
  );
};
