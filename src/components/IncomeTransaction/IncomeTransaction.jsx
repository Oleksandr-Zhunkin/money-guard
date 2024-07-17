import { ErrorMessage, Field } from "formik";

import css from "./IncomeTransaction.module.css";
import CustomDatePicker from "../CustomDatePicker/CustomDatePicker";

const AddTransactionForm = () => {
  return (
    <div className={css["inputs-container"]}>
      <Field className={css.inputs} name="sum" type="number" placeholder="0" />
      <ErrorMessage name="sum" />

      <Field
        className={css.inputs}
        component={CustomDatePicker}
        name="datepicker"
      />

      <Field
        className={css.inputs}
        as="textarea"
        name="comment"
        placeholder="Comment"
      />
      <ErrorMessage name="comment" />
    </div>
  );
};

export default AddTransactionForm;
