import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeTheme } from "../features/theme";

const Color = () => {
  const dispatch = useDispatch();
  const [color, setNewColor] = useState("");

  return (
    <>
      <input
        type="text"
        value={color}
        onChange={(e) => setNewColor(e.target.value)}
      />
      <button onClick={() => dispatch(changeTheme(color))}>Submit</button>
    </>
  );
};

export default Color;
