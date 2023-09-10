import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex justify-center items-center mt-[260px] text-center">
      <div>
        <h1 className="text-4xl">Donate your Blood</h1>
        <p className="w-[600px] text-xl mt-3">
          Blood donation is the act of voluntarily giving blood, either whole
          blood or specific blood components, to be used for medical purposes.
        </p>
        <Link to="/donate">
          <Button color="primary" variant="solid" className="mt-4">
            Donor
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
