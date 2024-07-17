import { ErrorMessage, Field } from "formik";

import css from "./IncomeTransaction.module.css";
import CustomDatePicker from "../CustomDatePicker/CustomDatePicker";

const AddTransactionForm = () => {
  return (
    <div className={css["inputs-container"]}>
      <div className={css["inline-container"]}>
        <Field
          className={`${css.inputs} ${css["inline-objects"]}`}
          type="number"
          name="sum"
        />

        <Field
          className={`${css.inputs} ${css["inline-objects"]}`}
          component={CustomDatePicker}
          name="datepicker"
        />
      </div>

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
