import React from "react";
import BookingForm from "../../components/booking-form/booking-form.component";

const Booking = () => {
  return (
    <div className="container">
      <h3 className="text-black text-3xl">Reserve a table</h3>
      <BookingForm />
    </div>
  );
};

export default Booking;
