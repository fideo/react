import React from "react";
import ReactDOM from "react-dom/client";
import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
import { SimpleForm } from "./02-useEffect/SimpleForm";
import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
import { FocusScreen } from "./04-useRef/FocusScreen";
import { Layout } from "./05-useLayoutEffect/Layout";
import { CallbackHooks } from "./06-memos/CallbackHooks";
import { MemoHook } from "./06-memos/MemoHook";
import { Memorize } from "./06-memos/Memorize";
import { Padre } from "./07-tarea-memo/Padre";
//import { CounterApp } from "./01-useState/CounterApp";
//import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
import { HooksApp } from "./HooksApp";
//import './08-useReducer/intro-reducer'

import "./index.css";
import { TodoApp } from "./08-useReducer/TodoApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    // <SimpleForm />
    // <FormWithCustomHook />
    //<MultipleCustomHooks />
    //<FocusScreen />
    // <Layout />
    // <Memorize />
    // <MemoHook />
    // <CallbackHooks />
    //<Padre />
    <TodoApp />
  //</React.StrictMode>
);
