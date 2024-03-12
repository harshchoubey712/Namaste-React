import React from "react"

class UserClass extends React.Component
{
  constructor(props)
  {
    super(props);
    console.log(props);

    this.state={
    
      userInfo: {
        name: "Dummy",
        location:"Default",
       
      },   
    }
    // console.log(this.props.name + "Child construnctor");
  } 

  async componentDidMount()
  {
    // console.log(this.props.name + "Child component did mount");

    const data = await fetch('https://api.github.com/users/akshaymarch7');
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  
  render()
{
  // debugger;//use this debugger to see step by step execution.
  const { name, location, avatar_url } = this.state.userInfo;
  
  return (
  <div className="user-card">
  <img src={avatar_url} />
  <h2>Name:{name}</h2>
  <h3> Location: {location}</h3>
  <h4>Contact:harsh.choubey@gmail.com</h4>
  
  </div>
  );
  
  }
} 
  


export default UserClass;
