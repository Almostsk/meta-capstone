import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import Button from "../../../button/button.component";

const Confirmation = ({ data, isOpen = false }) => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(isOpen);
  const handleOpen = () => setOpen(!open);
  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const userData = [
    {
      label: "Name",
      value: data.name,
    },
    {
      label: "Phone",
      value: data.phoneNumber,
    },
    {
      label: "Date",
      value: data.date
        ? format(data.date, "LLLL do, yyyy")
        : format(new Date(), "LLLL do, yyyy"),
    },
    {
      label: "Time",
      value: data.time,
    },
    {
      label: "Occasion",
      value: data.occasion,
    },
  ];

  return (
    <Dialog open={open} handler={handleOpen}>
      <DialogHeader>
        <div className="w-full">
          <p className="text-primary1 uppercase text-center w-full font-semibold">
            Success
          </p>
        </div>
      </DialogHeader>
      <DialogBody className="py-2">
        <div className="w-full">
          <p className="font-semibold">Reserve information</p>
          <p className="text-sm text-darkGray">
            Please check the contact information about your reservation.
          </p>
          <div className="grid grid-cols-2 grid-rows-2 mt-3">
            {userData.map((data) => (
              <div key={data.label} className="flex flex-col mt-2">
                <span className="text-sm text-darkGray">{data.label}</span>
                <span className="">{data.value}</span>
              </div>
            ))}
          </div>
        </div>
      </DialogBody>
      <DialogFooter>
        <div className="text-center w-full">
          <Button
            onClick={handleClose}
            label="Confirm"
            classes="hover:text-black"
          />
        </div>
      </DialogFooter>
    </Dialog>
  );
};

export default Confirmation;
