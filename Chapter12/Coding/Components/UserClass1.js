import React from "react"

class UserClass1 extends React.Component
{
  constructor(props)
  {
    super(props);
    console.log(props);

    this.state={
        count:0,
        count2:2,
      userInfo: {
        name: "Dummy",
        location:"Default",
      },   
    }
    // debugger;
    console.log(this.props.name + "Child construnctor");
  } 

  async componentDidMount()
  {
    console.log(this.props.name + "Child component did mount");

    const data = await fetch('https://api.github.com/users/akshaymarch7');
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  
  render()
{
  const{name,location} = this.props;
  const{count, count2}=this.state;
  // debugger;
  console.log(this.props.name + "Child Render");

  return (
  <div className="user-card">
  <h1>Count: {count}</h1>
  <button onClick={()=>
  {
    this.setState(
      {count:this.state.count + 1,
      });
  }}>Count increase</button>
  {/* <h1>Count2: {count2}</h1> */}
  {/* <h2>Name:Harsh</h2> */}
  <h2>Name:{name}</h2>
  {/* <h3> Location: Jabalpur</h3> */}
  <h3> Location: {location}</h3>
  <h4>Contact:harsh.choubey@gmail.com</h4>
  </div>
  );
  }
} 
  


export default UserClass1;
