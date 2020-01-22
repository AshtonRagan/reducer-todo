import React, { useReducer } from "react";
import TodoLsit from "./To-dos/TodoList";
import { Form } from "./To-dos/Form";
import "./App.css";
import { Reducer, initState } from "./Reducers/Reducer";

function App() {
  const [state, dispatch] = useReducer(Reducer, initState);
  return (
    <div className="App">
      <Form dispatch={dispatch} />
      <TodoLsit state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
