import { useState } from "react";
import WYSIWYGEditor from "./WYSIWYGEditor";
// import WYSIWYGEditor from "../../Components/WYSIWYGEditor";

const Editor = () => {
  const [state, setState] = useState(`
    <p><ins>Owner Abhishek</ins></p>
    <p>write Something Here.........</p>
    <ul>
    <li>=></li>
    <li>=></li>
    <li>=></li>
    <li>=></li>
    </ul>
    `);
  // console.log("state", state);
  const onChange = (v) => {
    setState(v);
  };
  return (
    <div>
      <div>Editor</div>
      <WYSIWYGEditor onChange={onChange} state={state} />
    </div>
  );
};
export default Editor;
