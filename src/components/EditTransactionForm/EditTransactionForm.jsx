import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import css from "./EditTransactionForm.module.css";
import IncomeTransaction from "../IncomeTransaction/IncomeTransaction";
import ExpenseTransaction from "../ExpenseTransaction/ExpenseTransaction";
import { updateTransactionsThunk } from "../../redux/transactions/operations";
import {
  categoriesThunk
} from "../../redux/categories/operations";
import { selectCategories } from "../../redux/categories/selectors";
import { fetchBalanceThunk } from "../../redux/auth/operations";

let formSchema = Yup.object({
  datepicker: Yup.date().required(),
  comment: Yup.string().required(),
});

const EditTransactionForm = ({
  transaction = {
    id: "f1372b12-642f-4437-8140-94eec9b7d51e",
    transactionDate: "2024-07-14T14:06:44.217Z",
    type: "EXPENSE",
    comment: "for goIt school",
    amount: -10000,
    balanceAfter: 8000,
    categoryId: "c9d9e447-1b83-4238-8712-edc77b18b739",
    userId: "d761b29a-7ba8-47da-b036-9be4b8058b80",
  },
  onClose,
}) => {
  const category = useSelector(selectCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(categoriesThunk());
    }, 1000);
  }, [dispatch]);
  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(
      updateTransactionsThunk({
        id: transaction.id,
        data: {
          transactionDate: values.datepicker,
          type: transaction.type,
          categoryId:
            transaction.type == "INCOME"
              ? category.find((elem) => elem.name == "Income")?.id
              : category.find((elem) => elem.name == values.category)?.id,
          comment: values.comment,
          amount: values.sum,
        },
      })
    )
      .unwrap()
      .then(() => {
        dispatch(fetchBalanceThunk());
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        category: category.find((elem) => elem.id === transaction.categoryId)
          ?.name,
        sum: transaction.amount,
        datepicker: new Date(transaction.transactionDate),
        comment: transaction.comment,
      }}
      onSubmit={handleSubmit}
      validationSchema={formSchema}
    >
      <Form className={css.form}>
        <h2 className={css.tableContent}>Edit transaction</h2>
        <div className={css["switcher-container"]}>
          {transaction.type == "INCOME" ? (
            <span>Incoming</span>
          ) : (
            <span className={css.active}>Incoming</span>
          )}
          /{" "}
          {transaction.type == "EXPENSE" ? (
            <span>Expense</span>
          ) : (
            <span className={css.active}>Expense</span>
          )}
        </div>
        {transaction.type == "INCOME" ? (
          <IncomeTransaction />
        ) : (
          <ExpenseTransaction
            categories={category}
            defaultValue={
              category.find((elem) => elem.id === transaction.categoryId)?.name
            }
          />
        )}
        <div className={css["buttons-container"]}>
          <button className={css.button} type="submit">
            Add
          </button>
          <button className={css.button} onClick={onClose} type="click">
            Cancel
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default EditTransactionForm;
