import { information } from "./Data";
import Donate from "../Components/Donate";
import Header from "../Components/Header";

const Donate_Page = () => {
  return (
    <div className="w-full py-2   text-white  bg-gray-800">
      <Header />

      <h1 className="text-center text-xl text-white">
        Donate any Hospital You want
      </h1>

      <div className=" lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4 max-w-[1240px]  mx-auto grid  my-2">
        {information.map((info) => (
          <Donate info={info} />
        ))}
      </div>
    </div>
  );
};

export default Donate_Page;
