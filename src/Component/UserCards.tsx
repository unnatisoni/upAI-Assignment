import React from "react";
import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import {  Redirect, useLocation } from "react-router-dom";
interface Props{
 
}



const UserCards: React.FC<Props> = (props) => {
 
  

const location = useLocation();
const user = (location.state as any).user;

console.log(user.age)
 const [dash , setDash ] = useState(false);
  
   
  return (
   <div>
  <div className=" flex flex-row space-x-4 w-full h-16 px-3  mt-4 mb-10 shadow-lg "> 
       <FiArrowLeft className="w-16 h-10" onClick={() => setDash(true)} />
         <h2 className="text-3xl font-semibold">{user?.first_name} {user?.last_name} </h2>
    </div>
      <div className="flex flex-col px-8 border border-black w-3/5 mx-auto py-16 shadow-xl bg-gray-100 font-serif text-xl space-y-5">   
        <p> <span className="font-semibold">First Name : </span>{user?.first_name}</p>
        <p> <span className="font-semibold"> Last Name :</span> {user?.last_name} </p>
        <p> <span className="font-semibold">Company Name : </span> {user?.company_name}</p>
        <p> <span className="font-semibold" >City : </span>{user?.city}</p>
        <p> <span className="font-semibold">State : </span>  {user?.state} </p>
        <p> <span className="font-semibold">Email : </span> {user?.email}</p>
        <p><span className="font-semibold text-black no-underline "> Website :  </span> <a className="text-blue-600 underline hover:text-blue-900"  href={user?.web}>{user?.web}</a></p>
        <p><span className="font-semibold">Age : </span> {user?.age}</p>
      
       
    </div>
  
  { dash && <div> 
    <Redirect to="/" />
     </div>}
   

   
    </div>
);
};

UserCards.defaultProps = {
}

export default UserCards;



