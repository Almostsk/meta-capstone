import React from "react";
import ListItem from "../list-item/list-item.component";
import { LIST_DATA } from "./list-items.constants";

const ListItems = () => {
  return (
    <div className="py-2 grid md:grid-cols-2 gap-4">
      {LIST_DATA.map((item) => (
        <ListItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ListItems;
