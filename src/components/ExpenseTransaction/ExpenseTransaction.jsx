import { ErrorMessage, Field } from "formik";
import css from "../IncomeTransaction/IncomeTransaction.module.css";
import CustomDatePicker from "../CustomDatePicker/CustomDatePicker";
import CustomSelect from "./CustomSelect";

const ExpenseTransaction = ({ categories }) => {
  return (
    <div className={css["inputs-container"]}>
      <Field
        className={`${css.inputs} ${css.category}`}
        name="category"
        component={CustomSelect}
        options={categories}
      />
      <ErrorMessage name="category" component="div" className="error" />

      <div className={css["inline-container"]}>
        <Field
          className={`${css.inputs} ${css["inline-objects"]}`}
          type="number"
          name="sum"
          placeholder="Sum"
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
      <ErrorMessage name="comment" component="div" className="error" />
    </div>
  );
};

export default ExpenseTransaction;
