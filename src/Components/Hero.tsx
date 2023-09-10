import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex justify-center items-center  text-center">
      <div className="mt-[130px]">
        <h1 className="text-4xl font-bold">Donate your Blood</h1>
        <p className="w-[600px] text-xl mt-3">
          Blood donation is the act of voluntarily giving blood, either whole
          blood or specific blood components, to be used for medical purposes.
        </p>
        <Link to="/donate">
          <Button color="primary" variant="solid" className="mt-4">
            Donor
          </Button>
        </Link>
        <h1 className="text-2xl text-white mt-5 font-semibold	">Requirments </h1>
        <div className="grid grid-cols-3 gap-8 ">
        <div className="w-[200px] shadow-xl flex  p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white">
          
          <ul  className="text-black  text-left mx-5 mt-5">
            <li><span className="font-bold">Age:</span> Typically 17 years or older.</li>

          </ul>
        </div>
        <div className="w-[200px] shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-black">
          
          <ul  className="text-white  text-left mx-5 mt-5">
      <li><span className="font-bold">Weight:</span> Usually a minimum of 50 kilograms (110 pounds).</li>
          </ul>
        </div>
        <div className="w-[200px] shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white">
          
          <ul  className="text-black  text-left mx-5 mt-5">

            <li><span className="font-bold	">Health:</span> Good overall health and passing a medical screening. </li>
          </ul>
        </div>
      </div>
      </div>
      

    </div>
  );
};

export default Hero;
