import React from "react";
import ListItems from "./components/list-items/list-items.component";

const Catalog = () => {
  return (
    <div className="container p-2">
      <span className="text-base font-semibold uppercase">
        Order for delivery!
      </span>
      <ListItems />
    </div>
  );
};

export default Catalog;
