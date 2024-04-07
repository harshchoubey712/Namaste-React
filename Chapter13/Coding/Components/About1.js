import User from "./User";
import UserClass1 from "./UserClass1"; 

const About1 = () =>
{
  return (
    <div>
      <h1>
        About us page
      </h1>
      {/* <User name={"Harsh(function)"} /> */}
      <UserClass1 name={"harsh(class)"} 
      location={"Jabalpur(class)"}/>
    </div>
  );
};

export default About1;
