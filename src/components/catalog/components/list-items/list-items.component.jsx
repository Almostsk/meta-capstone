import React from "react";
import ListItem from "../list-item/list-item.component";
import { LIST_DATA } from "./list-items.constants";

const ListItems = () => {
  return (
    <div className="border-t border-gray py-2">
      {LIST_DATA.map((item) => (
        <ListItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ListItems;
