import { IoCheckmarkCircle } from "react-icons/io5";


const Feature = ({feature}) => {
    return (
        <div >
           <p className="flex items-center  ps-6 "> <IoCheckmarkCircle className="me-2" /> {feature}</p>
            
        </div>
    );
};

export default Feature;