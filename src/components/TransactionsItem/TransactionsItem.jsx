import { useState } from "react";
import clsx from "clsx";
import { GoPencil } from "react-icons/go";
import useRespons from "../../hooks/useRespons.js";
import { transaction } from "../../helpers/transactionsItemMockData.js";
import EditTransactionForm from "../EditTransactionForm/EditTransactionForm";
import s from "./TransactionsItem.module.css";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2);
  return `${day}.${month}.${year}`;
};

const TransactionsItem = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { mobileUser } = useRespons();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const displayType = transaction.type === "INCOME" ? "+" : "-";
  const displayAmount = Math.abs(transaction.amount);

  const category = transaction.category;
  const categoryName = category ? category.name : "Unknown";

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
            <GoPencil height={14} width={14} />
          </button>
          <button
            className={clsx(s.button, s.animation)}
            type="button"
            onClick={() => handleDelete(transaction.id)}
            aria-label="delete button"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );

  const handleDelete = (id) => {
    console.log(`Deleting transaction with id ${id}`);
  };

  return (
    <>
      {!mobileUser ? transactionRow : null}
      {isModalOpen && (
        <EditTransactionForm
          categoryName={categoryName}
          closeModal={closeModal}
          transaction={transaction}
        />
      )} */}
    </>
  );
};

export default TransactionsItem;
