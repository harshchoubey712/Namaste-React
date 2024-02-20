import React from "react";
import ReactDOM from "react-dom/client";

// A simple React element defined using JSX
const elem = <span>React Element</span>;

// A title element that incorporates the 'elem' React element
const title = (
  <h1 className="head" tabIndex="5">
    {elem}
    Namaste React using JSX 🚀
  </h1>
);

// A functional React component that renders 'title' and another heading
const HeadingComponent = () => (
  <div id="container">
    {title}
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

// The root of the React application where the 'HeadingComponent' is rendered
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
