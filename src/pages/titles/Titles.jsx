import React, { useEffect, useRef, useState } from "react";

const Titles = () => {
  const [title, setTitle] = useState("Title");
  const ref = useRef();

  useEffect(() => {
    // This will run when the page first loads and whenever the title changes
    document.title = title;
  }, [title]);

  // const changeTitle = (event) => {
  //   // setTitle(event.target.value);
  // };
  const titleHandle = () => {
    console.log("ref", ref.current.value);
    setTitle(ref.current.value);
  };

  return (
    <div>
      <input
        type="text"
        // onChange={changeTitle}
        // value={title}
        ref={ref}
        style={{ fontSize: "18px" }}
        placeholder="Enter Title..."
      />
      <br />
      <br />
      <button onClick={titleHandle}>Change Title</button>
    </div>
  );
};

export default Titles;
