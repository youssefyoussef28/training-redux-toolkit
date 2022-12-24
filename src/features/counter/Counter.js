import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount, reset } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;

  // Reset Function
  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <section>
      <p>{count}</p>

      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement(addValue))}>-</button>
      </div>
      <input
        type={"text"}
        value={incrementAmount}
        onChange={(e) => {
          setIncrementAmount(e.target.value);
        }}
      />
      <div>
        <button onClick={() => resetAll()}>Reset</button>
        <button onClick={() => dispatch(incrementByAmount(incrementAmount))}>
          Add Amount
        </button>
      </div>
    </section>
  );
};

export default Counter;
