import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between mx-20 ">
        <a href="/">
          {" "}
          <h1 className="mt-3">LifePulse 🩸</h1>
        </a>
        <Link to="donate">
          <Button color="primary" variant="solid" className="mt-3">
            Donor
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
