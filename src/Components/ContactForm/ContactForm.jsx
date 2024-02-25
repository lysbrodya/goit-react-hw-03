import { Formik, Form, Field } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import css from "./ContactForm.module.css";

export default function ContactForm({ onAdd }) {
  const phoneId = useId();
  const nameId = useId();
  const initialValues = {
    name: "",
    number: "",
  };
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        onAdd({
          id: nanoid(),
          name: values.name,
          number: values.number,
        });
        actions.resetForm();
      }}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameId}>Name</label>
        <Field type="text" name="name" id={nameId} />
        <ErrorMessage name="name" component="span" className={css.erm} />

        <label htmlFor={phoneId}>Number</label>
        <Field type="text" name="number" id={phoneId} />
        <ErrorMessage name="number" component="span" className={css.erm} />
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
