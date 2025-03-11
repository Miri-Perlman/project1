import { useState } from "react";
import './Child'
import Child from "./Child";
import './DisplayChild';
import DisplayChild from "./DisplayChild";



const Father = () =>{

    
const [ArrChild, setArrChild]=useState([]);
    const addChild=(newChild)=>{
        const newArr= [...ArrChild,newChild];
        setArrChild(newArr);
    }
return(
<div>

<Child  addChildFunc={addChild}></Child>
{ArrChild.length >0 &&
ArrChild.map((child, index) => {
    return <DisplayChild key={index} child={child}/>
  })
}
</div>
);
}
export default Father;