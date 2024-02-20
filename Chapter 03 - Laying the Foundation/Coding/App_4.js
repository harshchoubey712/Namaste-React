import React from "react";
import ReactDOM from "react-dom/client";

// Title component defined using JSX
const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX 🚀
  </h1>
);

// HeadingComponent that includes multiple Title components and another heading
const HeadingComponent = () => (
  <div id="container">
     {Title()}
    <Title />
    <Title> </Title>
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

// The root of the React application where the 'HeadingComponent' is rendered
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
