import React from "react";
import ListItems from "./components/list-items/list-items.component";
import "./styles.css";

const Catalog = () => {
  return (
    <div className={`container p-2 mt-4 food-catalog`}>
      <span className="text-base text-white font-semibold uppercase">
        Order for delivery!
      </span>
      <ListItems />
    </div>
  );
};

export default Catalog;
