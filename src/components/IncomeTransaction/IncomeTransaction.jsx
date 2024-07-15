import { ErrorMessage, Field } from "formik";

import css from "./IncomeTransaction.module.css";
import CustomDatePicker from "../CustomDatePicker/CustomDatePicker";

const AddTransactionForm = () => {
  return (
    <div className={css["inputs-container"]}>
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

export default AddTransactionForm;
