import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const BookingSchema = Yup.object({
  name: Yup.string().required("Required"),
  date: Yup.string().required("Required"),
  time: Yup.string().required("Required"),
  guests: Yup.number()
    .min(1, "Min 1 guest")
    .max(10, "Max 10 guests")
    .required("Required"),
  occasion: Yup.string().required("Required"),
});

export default function BookingForm({ availableTimes, onDateChange, onSubmitSuccess }) {
  return (
    <Formik
      initialValues={{
        name: "",
        date: "",
        time: "",
        guests: "",
        occasion: "",
      }}
      validationSchema={BookingSchema}
      onSubmit={(values, { resetForm }) => {
        setTimeout(() => {
          onSubmitSuccess();
          resetForm();
        }, 500);
      }}
    >
      {({ setFieldValue }) => (
        <Form className="form-card">
          
          {/* NAME */}
          <label htmlFor="name">Name</label>
          <Field name="name" className="input" />
          <ErrorMessage name="name" component="p" className="error-message" />

          {/* DATE */}
          <label htmlFor="date">Date</label>
          <Field
            type="date"
            name="date"
            className="input"
            onChange={(e) => {
              setFieldValue("date", e.target.value);
              onDateChange(e.target.value);
            }}
          />
          <ErrorMessage name="date" component="p" className="error-message" />

          {/* TIME */}
          <label htmlFor="time">Time</label>
          <Field as="select" name="time" className="input">
            <option value="">Select time...</option>
            {availableTimes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </Field>
          <ErrorMessage name="time" component="p" className="error-message" />

          {/* GUESTS */}
          <label htmlFor="guests">Guests</label>
          <Field
                type="number"
                name="guests"
                className="input"
                min="1"
                max="10"
                onInput={(e) => {
                    let value = parseInt(e.target.value);

                    if (isNaN(value)) {
                    e.target.value = "";
                    return;
                    }

                    if (value < 1) e.target.value = 1;
                    if (value > 10) e.target.value = 10;
                }}
            />

          <ErrorMessage name="guests" component="p" className="error-message" />

          {/* OCCASION */}
          <label htmlFor="occasion">Occasion</label>
          <Field as="select" name="occasion" className="input">
            <option value="">Choose...</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </Field>
          <ErrorMessage name="occasion" component="p" className="error-message" />

          {/* SUBMIT */}
          <button type="submit" className="booking-submit">
            Reserve Table
          </button>
        </Form>
      )}
    </Formik>
  );
}

