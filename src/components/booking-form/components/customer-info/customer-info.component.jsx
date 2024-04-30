import React, { useState, useEffect } from "react";
import { Field, useFormikContext, ErrorMessage } from "formik";
import { Input } from "@material-tailwind/react";
import DatePicker from "react-datepicker";
import Tables from "../tables/tables.component";
import { fetchTables } from "../../../../utils/fakeAPI";
import { WORK_TIME, OCCASIONS } from "../../booking-form.constants";

const CustomerInfo = () => {
  const { values, setFieldValue, touched, errors } = useFormikContext();
  const [availableTables, setAvailableTables] = useState([]);

  useEffect(() => {
    if (values.time && values.date) {
      const tables = fetchTables(values.date);
      setAvailableTables(tables);
    }
  }, [values.date, values.time]);

  return (
    <>
      <div className="input-group mb-3">
        <Field
          as={Input} // Using Material Tailwind Input
          label="Name"
          aria-label="name"
          type="text"
          name="name"
          error={Boolean(touched.name && errors.name)}
        />
        <ErrorMessage
          name="name"
          component="div"
          className="text-red-500 text-xs"
        />
      </div>
      <div className="input-group mb-3">
        <Field
          as={Input}
          type="text"
          name="phoneNumber"
          label="Phone Number"
          aria-label="Phone Number"
          error={Boolean(touched.phoneNumber && errors.phoneNumber)}
        />
        <ErrorMessage
          name="phoneNumber"
          component="div"
          className="text-red-500 text-xs"
        />
      </div>
      <div className="flex flex-wrap mb-3">
        <div className="input-group inline-block w-6/12">
          <label htmlFor="date" className="block text-darkerGray">
            Date
          </label>
          <DatePicker
            id="date"
            name="date"
            aria-label="date"
            selected={values.date}
            onChange={(date) => setFieldValue("date", date)}
            className={`form-input mt-1 block w-full rounded-md p-2 border border-darkGray`}
          />
          <ErrorMessage
            name="date"
            component="div"
            className="text-red-500 text-xs"
          />
        </div>
        <div className="input-group inline-block w-6/12">
          <label htmlFor="date" className="block text-darkerGray">
            Time
          </label>
          <Field
            as="select"
            id="time"
            name="time"
            aria-label="time"
            value={values.time}
            onChange={(event) => setFieldValue("time", event.target.value)}
            className={`form-select mt-1 block w-full rounded-md p-2 border border-darkGray`}
          >
            <option value="" disabled>
              Select Time
            </option>
            {WORK_TIME.map((timeOption, index) => (
              <option key={index} value={timeOption}>
                {timeOption}
              </option>
            ))}
          </Field>
          <ErrorMessage
            name="time"
            component="div"
            className="text-red-500 text-xs"
          />
        </div>
        <div className="input-group inline-block w-6/12">
          <label htmlFor="occasion" className="block text-darkerGray">
            Occasion
          </label>
          <Field
            as="select"
            id="occasion"
            name="occasion"
            value={values.occasion}
            onChange={(event) => setFieldValue("occasion", event.target.value)}
            className={`form-select mt-1 block w-full rounded-md p-2 border border-darkGray`}
          >
            <option value="" disabled>
              Select occasion
            </option>
            {OCCASIONS.map((occ, index) => (
              <option key={index} value={occ}>
                {occ}
              </option>
            ))}
          </Field>
          <ErrorMessage
            name="occasion"
            component="div"
            className="text-red-500 text-xs"
          />
        </div>
      </div>
      {!!availableTables.length && (
        <>
          <Tables name="selectedTable" options={availableTables} />
          <ErrorMessage
            name="selectedTable"
            component="div"
            className="text-red-500 text-xs"
          />
        </>
      )}
    </>
  );
};

export default CustomerInfo;
