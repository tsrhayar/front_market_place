import React from "react";
import { Link } from "react-router-dom";

const FilterNav = () => {
  return (
    <div className="btn-group btn-group-sm">
      <Link to="/" className="btn btn-primary">
        Normal
      </Link>
      <Link to="/bypricelth" className="btn btn-primary">
        By Price (Low to hight)
      </Link>
      <Link to="/bypricehtl" className="btn btn-primary">
        By Price (Hight to low)
      </Link>
    </div>
  );
};

export default FilterNav;
