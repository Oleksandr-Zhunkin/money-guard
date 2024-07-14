import { ErrorMessage, Field } from "formik";

import css from "./ExpenseTransaction.module.css";
import CustomDatePicker from "../CustomDatePicker/CustomDatePicker";

const ExpenseTransaction = ({ categories }) => {
  return (
    <div className={css["inputs-container"]}>
      <Field className={css.inputs} as="select" name="category">
        {categories.map((elem) => {
          if (elem.name == "Income") return;
          return <option key={elem.id}>{elem.name}</option>;
        })}
      </Field>
      <ErrorMessage name="category" />

      <Field className={css.inputs} type="number" name="sum" />
      <ErrorMessage name="sum" />

      <Field
        className={css.inputs}
        component={CustomDatePicker}
        name="datepicker"
      />

      <Field className={css.inputs} as="textarea" name="comment" />
      <ErrorMessage name="comment" />
    </div>
  );
};

export default ExpenseTransaction;
