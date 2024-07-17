import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import css from "./AddTransactionForm.module.css";
import IncomeTransaction from "../IncomeTransaction/IncomeTransaction";
import ExpenseTransaction from "../ExpenseTransaction/ExpenseTransaction";
import { addTransactionsThunk } from "../../redux/transactions/operations";
import { categoriesThunk } from "../../redux/categories/operations";
import { selectCategories } from "../../redux/categories/selectors";

let formSchema = Yup.object({
  sum: Yup.number().min(1).required(),
  datepicker: Yup.date().required(),
  comment: Yup.string().required(),
});

const AddTransactionForm = ({ onClose }) => {
  const category = useSelector(selectCategories);
  const [isExpense, setIsIncome] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(categoriesThunk());
    }, 1000);
  }, [dispatch]);

  const handleSubmit = (values, actions) => {
    dispatch(
      addTransactionsThunk({
        transactionDate: values.datepicker,
        type: !isExpense ? "INCOME" : "EXPENSE",
        categoryId: !isExpense
          ? category.find((elem) => elem.name == "Income").id
          : category.find((elem) => elem.name == values.category).id,
        comment: values.comment,
        amount: !isExpense ? values.sum : -values.sum,
      })
    );
    actions.resetForm();
  };

  const handleOnChange = () => {
    setIsIncome(!isExpense);
  };

  return (
    <Formik
      initialValues={{
        category: "Main expenses",
        incomeExpense: !isExpense,
        sum: 0,
        datepicker: new Date(),
        comment: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={formSchema}
    >
      <Form className={css.form}>
        <button className={css.close} onClick={(e) => onClose(e)}></button>
        <h2 className={css.tableContent}>Add transaction</h2>
        <div className={css["switcher-container"]}>
          Incoming
          <label className={css.slider}>
            <Field
              checked={!isExpense}
              type="checkbox"
              name="incomeExpense"
              onChange={handleOnChange}
            />
            <span className={css["slider-circle"]}></span>
          </label>
          Expense
        </div>
        {isExpense ? (
          <IncomeTransaction />
        ) : (
          <ExpenseTransaction categories={category} />
        )}
        <div className={css["buttons-container"]}>
          <button className={`${css.button} ${css.submit_btn}`} type="submit">
            Add
          </button>
          <button
            className={css.button}
            onClick={(e) => onClose(e)}
            type="click"
          >
            Cancel
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default AddTransactionForm;
