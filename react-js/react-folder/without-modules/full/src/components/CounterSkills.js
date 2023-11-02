import CounterSkills1 from './CounterSkills1';
import {useEffect} from "react";
import Aos from "aos";
  
function CounterSkills() {
    useEffect(() => {
      Aos.init({duration:1000});
  }, []);
  return (
     
   <div className="App">
     <h3 className="heading">Progress Bar</h3>
      <CounterSkills1 bgcolor="orange" progress='30'  height={30} />
      <CounterSkills1 bgcolor="red" progress='60'  height={30} />
      <CounterSkills1 bgcolor="#99ff66" progress='50'  height={30} />
      <CounterSkills1 bgcolor="#ff00ff" progress='85'  height={30} />
      <CounterSkills1 bgcolor="#99ccff" progress='95'  height={30} />
   </div>
     
  );
}
export default CounterSkills;