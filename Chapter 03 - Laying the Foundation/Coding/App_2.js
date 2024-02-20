import React from "react";
import ReactDOM from "react-dom/client";

// A simple React element created using JSX
const title = (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX 🚀
  </h1>
);

// A functional React component that uses the 'title' element
const HeadingComponent = () => (
  <div id="container">
    {title}
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

// The root of the React application where the 'HeadingComponent' is rendered
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
