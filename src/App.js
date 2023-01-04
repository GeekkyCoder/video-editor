import { useContext } from "react";
import { Context } from "./components/Context/Context";
import Editor from "./components/Editor/Editor";

function App() {
  const {theme} = useContext(Context)

  return (
    <div className={`${theme}-mode`}>
        <Editor/>
    </div> 
  );
}

export default App;
