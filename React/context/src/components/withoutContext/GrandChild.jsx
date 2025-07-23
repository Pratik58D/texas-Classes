import React from "react";

const GrandChild = ({ count, setCount }) => {
  return (
    <div>
      <h1>GrandChild</h1>

      <h3>count is : {count}</h3>

      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default GrandChild;
