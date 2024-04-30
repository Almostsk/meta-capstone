import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Confirmation from "./components/confirmation/confirmation.component";
import CustomerInfo from "./components/customer-info/customer-info.component";
import { submitAPI } from "../../utils/fakeAPI";

import "react-datepicker/dist/react-datepicker.css";

const BookingForm = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState(false);

  const initialValues = {
    selectedTable: "",
    name: "",
    phoneNumber: "",
    date: new Date(),
    time: "",
    occasion: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    phoneNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Invalid phone number")
      .required("Required"),
    selectedTable: Yup.string().required("Required"),
    date: Yup.date().required("Required"),
    time: Yup.string().required("Required"),
    occasion: Yup.string().required("Required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setFormData(values);
    setSubmitting(false);
    if (submitAPI()) setShowConfirmation(true); //Meta fake API isn't working
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <p className="text-primary1 text-base mb-2">
              Please fill all following information to reserve a table.
            </p>
            <CustomerInfo />
            <button
              className={`w-full rounded-full text-black bg-primary2 p-2 mt-4`}
              type="submit"
              role="button"
            >
              Reserve a table
            </button>
          </Form>
        )}
      </Formik>
      <Confirmation isOpen={showConfirmation} data={formData} />
    </>
  );
};

export default BookingForm;
