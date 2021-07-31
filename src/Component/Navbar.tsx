import React from "react";
interface Props{
}
const Navbar: React.FC<Props> = (props) => {
  return (
    <div className=" bg-black w-full h-14 items-center ">
        <h2 className=" text-white pl-16 text-2xl py-3 font-bold">upAI</h2>
        
    </div>
);
};

Navbar.defaultProps = {
}

export default Navbar;