import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import iconEdit from "../../images/icons/icon-edit.svg";
import useRespons from "../../hooks/useRespons.js";
import { selectCategories } from "../../redux/categories/selectors.js";
import { deleteTransactionsThunk } from "../../redux/transactions/operations";
import s from "./TransactionsItem.module.css";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2);
  return `${day}.${month}.${year}`;
};

const TransactionsItem = ({ transaction, openModal }) => {
  const dispatch = useDispatch();
  const displayType = transaction.type === "INCOME" ? "+" : "-";
  const { mobileUser } = useRespons();

  const categories = useSelector(selectCategories);
  const category = categories.find(
    (item) => item.id === transaction.categoryId
  );
  const categoryName = category ? category.name : "Unknown";
  const displayAmount = Math.abs(transaction.amount);

  const transactionRow = (
    <tr key={transaction.id}>
      <td>{formatDate(transaction.transactionDate)}</td>
      <td className={s.type}>{displayType}</td>
      <td>{categoryName}</td>
      <td>{transaction.comment}</td>
      <td
        className={clsx(s.sum, {
          [s.income]: transaction.type === "INCOME",
          [s.expense]: transaction.type === "EXPENSE",
        })}
      >
        {displayAmount}
      </td>
      <td>
        <div className={s.btnBox}>
          <button
            className={s.edit}
            type="button"
            onClick={openModal}
            aria-label="edit button"
          >
            <img className={s.editImg} src={iconEdit} alt="Edit" />
          </button>
          <button
            className={s.button}
            type="button"
            onClick={() => dispatch(deleteTransactionsThunk(transaction.id))}
            aria-label="delete button"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );

  const transactionCard = (
    <li
      className={clsx(s.card, {
        [s.cardIncome]: transaction.type === "INCOME",
        [s.cardExpense]: transaction.type === "EXPENSE",
      })}
      key={transaction.id}
    >
      <div className={s.cardRow}>
        <span className={s.cardLabel}>Date</span>
        <span className={s.cardValue}>
          {formatDate(transaction.transactionDate)}
        </span>
      </div>
      <div className={s.cardRow}>
        <span className={s.cardLabel}>Type</span>
        <span className={s.cardValue}>{displayType}</span>
      </div>
      <div className={s.cardRow}>
        <span className={s.cardLabel}>Category</span>
        <span className={s.cardValue}>{categoryName}</span>
      </div>
      <div className={s.cardRow}>
        <span className={s.cardLabel}>Comment</span>
        <span className={s.cardValue}>{transaction.comment}</span>
      </div>
      <div className={s.cardRow}>
        <span className={s.cardLabel}>Sum</span>
        <span
          className={clsx(s.cardSum, {
            [s.income]: transaction.type === "INCOME",
            [s.expense]: transaction.type === "EXPENSE",
          })}
        >
          {displayAmount}
        </span>
      </div>
      <div className={s.cardActions}>
        <button
          className={s.button}
          type="button"
          onClick={() => dispatch(deleteTransactionsThunk(transaction.id))}
          aria-label="delete button"
        >
          Delete
        </button>
        <button
          className={s.editContainer}
          type="button"
          onClick={openModal}
          aria-label="edit button"
        >
          <img
            className={s.editImg}
            src={iconEdit}
            alt="Edit"
            height={14}
            width={14}
          />
          <p className={s.edit}>Edit</p>
        </button>
      </div>
    </li>
  );

  return mobileUser ? transactionCard : transactionRow;
};

export default TransactionsItem;
