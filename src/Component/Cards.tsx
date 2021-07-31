import { useState } from "react";
import { ResponseResult, UserGroups} from "../Base/UserTable"
import { Redirect} from 'react-router-dom';

interface Props{
    firstname : string;
    lastname : string;
    Age : number;
    Email : string;
    website : string;
    u? : ResponseResult

} 


const Cards: React.FC<Props> = ({firstname, lastname, Age, Email, website,u}) => {

  
  
const [ selectuser, setSelectUser ] = useState<ResponseResult>()
const [ count, setCount ] = useState(false);

 return (


<div className="mx-20">
    
    <div className=" flex flex-row justify-around px-10 w-full bg-gray-100 text-left mb-2 font-sans h-20 items-center hover:bg-gray-600 hover:text-white" onClick = {() =>{ setSelectUser(u); setCount(true);  console.log(u);}} >
    
      <h2 className=" w-1/12">  {firstname} </h2>
      <h2 className=" w-1/12"> {lastname}</h2>
      <p className="w-1/12"> {Age}</p> 
      <p className=" w-3/12"> {Email}</p>
      <a href={website} className=" text-blue-400 w-3/12 hover:text-blue-200 hover:underline">  {website}</a>
      </div>
 

{count && 

  <div className="w-full bg-gray-100 flex flex-row space-x-7 px-8 ">
  
   <Redirect to={{
                pathname: '/UserCards',
                state : {user : selectuser}
            }} >
     
     </Redirect> 
   
    </div>

  
}

</div>

);
};


Cards.defaultProps = {
}

export default Cards;

