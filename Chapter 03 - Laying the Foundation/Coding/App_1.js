import React from "react";
import ReactDOM from "react-dom/client";

// Title component defined using JSX
const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX 🚀
  </h1>
);

// HeadingComponent that uses Title component
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

// Root of the React application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

