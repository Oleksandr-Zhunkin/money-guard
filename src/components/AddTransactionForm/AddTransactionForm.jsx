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
import { refreshThunk } from "../../redux/auth/operations";

let formSchema = Yup.object({
  sum: Yup.number().min(1).required(),
  datepicker: Yup.date().required(),
  comment: Yup.string().required(),
  category: Yup.object()
    .shape({
      value: Yup.string().required(),
      label: Yup.string().required(),
    })
    .required(),
});

const AddTransactionForm = ({ onClose }) => {
  const categories = useSelector(selectCategories);
  const [isExpense, setIsIncome] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoriesThunk());
  }, [dispatch]);

  const handleSubmit = (values, actions) => {
    const categoryName = isExpense ? "Income" : values.category.value;
    const category = categories.find((elem) => elem.name === categoryName);

    if (!category) {
      console.error(`Category not found: ${categoryName}`);
      return;
    }

    const data = {
      transactionDate: values.datepicker,
      type: isExpense ? "INCOME" : "EXPENSE",
      categoryId: category.id,
      comment: values.comment,
      amount: isExpense ? values.sum : -values.sum,
    };

    console.log("Submitting transaction data:", data);

    dispatch(addTransactionsThunk(data))
      .unwrap()
      .then(() => {
        dispatch(refreshThunk());
        actions.resetForm();
      })
      .catch((error) => {
        console.error("Error adding transaction:", error);
      });
  };

  const handleOnChange = () => {
    setIsIncome(!isExpense);
  };

  if (!categories.length) {
    return <div>Loading categories...</div>;
  }

  const categoryOptions = categories.map((cat) => ({
    value: cat.name,
    label: cat.name,
  }));

  return (
    <Formik
      initialValues={{
        category: { value: "Main expenses", label: "Main expenses" },
        incomeExpense: !isExpense,
        sum: "",
        datepicker: new Date(),
        comment: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={formSchema}
    >
      <Form className={css.form}>
        <button className={css.close} onClick={onClose}></button>
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
          <ExpenseTransaction categories={categoryOptions} />
        )}
        <div className={css["buttons-container"]}>
          <button className={`${css.button} ${css.submit_btn}`} type="submit">
            Add
          </button>
          <button className={css.button} type="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default AddTransactionForm;
