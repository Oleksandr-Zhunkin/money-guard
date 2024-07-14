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
  datepicker: Yup.date().required(),
  comment: Yup.string().required(),
});

const AddTransactionForm = () => {
  const category = useSelector(selectCategories);
  const [isIncome, setIsIncome] = useState(true);
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
        type: isIncome ? "INCOME" : "EXPENSE",
        categoryId: isIncome
          ? category.find((elem) => elem.name == "Income").id
          : category.find((elem) => elem.name == values.category).id,
        comment: values.comment,
        amount: -values.sum,
      })
    );
    actions.resetForm();
  };

  const handleOnChange = () => {
    setIsIncome(!isIncome);
  };

  return (
    <Formik
      initialValues={{
        category: "Main expenses",
        incomeExpense: isIncome,
        sum: 0,
        datepicker: new Date(),
        comment: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={formSchema}
    >
      <Form className={css.form}>
        <h2 className={css.tableContent}>Add transaction</h2>
        <div className={css["switcher-container"]}>
          Incoming
          <Field
            checked={isIncome}
            type="checkbox"
            name="incomeExpense"
            onChange={handleOnChange}
          />
          Expense
        </div>
        {isIncome ? (
          <IncomeTransaction />
        ) : (
          <ExpenseTransaction categories={category} />
        )}
        <div className={css["buttons-container"]}>
          <button className={css.button} type="submit">
            Add
          </button>
          <button className={css.button} type="click">
            Cancel
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default AddTransactionForm;
