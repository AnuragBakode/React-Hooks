import "./App.css";
import React, { useReducer , useState , useCallback } from "react";
import ClassCounter1 from "./components/useEffect/ClassCounter1";
import DataFetching from "./components/useEffect/DataFetching";
import HookCounter1 from "./components/useEffect/HookCounter1";
import IntervalHookCounter from "./components/useEffect/IntervalHookCounter";
import ComponentC from "./components/useReducer/ComponentC";
import ComponentB from "./components/useReducer/ComponentB";
import Counter3 from "./components/useReducer/Counter3";
import ComponentA from "./components/useReducer/ComponentA";
import DataFetching2 from "./components/useReducer/DataFetching2";
import Count from "./components/useCallback/Count";

import Button from "./components/useCallback/Button"
import Counter from "./components/useMemo/Counter";
import FocusInput from "./components/useRef/FocusInput";
import ClassTimer from "./components/useRef/ClassTimer";
import HookTimer from "./components/useRef/HookTimer";
import DocTitle from "./components/customHook/DocTitle";
import DocTitle2 from "./components/customHook/DocTitle2";
import CounterOne from "./components/customHook/CounterOne";
import UserForm from "./components/customHook/UserForm";

// export const userContext = React.createContext();
// export const channelContext = React.createContext();

export const CountContext = React.createContext()

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
}

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState);

  const [count , setCount] = useState(10)
  const [salary , setSalary] = useState(5000)

  const handleCount =  useCallback(() => {
    setCount(count + 1)
  }, [count])

  const handleSalary = useCallback(() => {
    setSalary(salary + 100);
  }, [salary]) 

  return (
    // <CountContext.Provider
    //   value={{countState : count, countDispatch:dispatch}}
    // >
    //   <div className="App">
    //     Count - {count}
    //     <ComponentA />
    //     <ComponentB />
    //     <ComponentC />
    //   </div>
    // </CountContext.Provider>
    <div className = "App">
      {/* <DataFetching2/> */}



      {/* Use CallBack Code */}
      {/* <h2>useCallback Hook</h2>
      <Count title = "Count" value = {count}/>
      <Button title = "Count" handleClick = {handleCount}/>
      <Count title = "Salary" value = {salary}/>
      <Button  title = "Salary" handleClick = {handleSalary}/> */}


      {/* Use Memo Hook */}
      {/* <Counter/> */}

      {/* Use Ref */}
      {/* <FocusInput/> */}
      {/* <ClassTimer/>
      <HookTimer/> */}

      {/* Custom Hook */}
      {/* <DocTitle/>

      <DocTitle2/> */}

      {/* <CounterOne/> */}

      <UserForm/>
      
    </div>
  );
}

export default App;
