import React from "react";

const ListItem = ({
  name = "Tesr",
  description = "some desc",
  price = "2.99$",
  img,
}) => {
  return (
    <div
      data-testid="list-item"
      className="flex justify-between p-2 bg-white06 rounded-md"
    >
      <div className="w-8/12 flex flex-col ">
        <span className="font-semibold text-base">{name}</span>
        <p className="text-primary1 text-xs">{description}</p>
        <span className="text-primary1 text-sm inline-box mt-2 justify-self-end">
          {price}
        </span>
      </div>
      <img className="w-3/12 aspect-square object-cover" src={img} alt={name} />
    </div>
  );
};

export default ListItem;
