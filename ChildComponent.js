// ChildComponent.jsx
import React from 'react';

const ChildComponent = (props) => {
  return (
    <div>
      {/* <h2>Child Component</h2> */}
      <p>Hi {props.name}</p>
    </div>
  );
};

export default ChildComponent;
