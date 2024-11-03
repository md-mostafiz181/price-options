
import { IoMdClose, IoMdMenu } from "react-icons/io";
import Link from './Link/Link';
import { useState } from "react";


const Navbar = () => {

    const [open,setOpen] =useState(false)

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/contact", name: "Contact" },
        { id: 4, path: "/gallery", name: "Gallery" },
        { id: 5, path: "/team", name: "Team" }
      ];
    return (
        <div>



             <div className="md:hidden text-4xl bg-orange-300" onClick={()=>setOpen(!open)}>
                {
                    open === true ? <IoMdClose/>
                    : <IoMdMenu ></IoMdMenu>
                }
               

             </div>
            

            <ul className={`md:flex bg-orange-500
                ${open ? "top-9" : "-top-72"}
                 duration-1000  absolute md:static p-6 shadow-lg`}>
                {
                    routes.map (route => <Link key={route.id} route= {route}></Link> )
                }
            </ul>
            
        </div>
    );
};

export default Navbar;