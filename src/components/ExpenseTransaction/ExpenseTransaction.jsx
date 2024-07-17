import { ErrorMessage, Field } from "formik";

import css from "../IncomeTransaction/IncomeTransaction.module.css";
import CustomDatePicker from "../CustomDatePicker/CustomDatePicker";

const ExpenseTransaction = ({ categories, defaultValue = "Main expenses" }) => {
  return (
    <div className={css["inputs-container"]}>
      <Field
        className={`${css.inputs} ${css.select}`}
        as="select"
        name="category"
      >
        {defaultValue != undefined && <option>{defaultValue}</option>}
        {categories.map((elem) => {
          if (elem.name == "Income") return;
          if (defaultValue != undefined && elem.name == defaultValue) return;
          return (
            <option key={elem.id} className={css.option}>
              {elem.name}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name="category" />

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

export default ExpenseTransaction;
