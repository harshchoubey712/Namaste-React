import User from "./User";
import UserClass from "./UserClass"; 
// import UserClass1 from "./UserClass1"; 
import React from "react";

class About extends React.Component 
{
  constructor(props)
  {
    super(props);
    // debugger;
    console.log("Parent construnctor");
  
  }

  componentDidMount()
  {
    console.log("Parent component did mount");
  }


  render()
  {
    // debugger;
    console.log("Parent Render");
    return (
      <div>
        <h1>
          About us page
        </h1>
        {/* <User name={"Harsh(function)"} /> */}

        {/* from About.js call UserClass1.js and then UserClass.js */}

        {/* <UserClass1 name={"First(class)"} 
        location={"Jabalpur(class)"}/>

        <UserClass1 name={"Second(class)"} 
        location={"US(class)"}/> */}

        <UserClass name={"First(class)"} 
        location={"Jabalpur(class)"}/>

        <UserClass name={"Second(class)"} 
        location={"US(class)"}/>
      </div>
    );
  }

}
 


export default About;
