import { useSelector } from "react-redux";
import { useState } from "react";
import TransactionsItem from "../TransactionsItem/TransactionsItem";
import { selectTransactions } from "../../redux/transactions/selectors.js";
import useRespons from "../../hooks/useRespons.js";
import s from "./TransactionsList.module.css";
import ModalWindow from "../ModalWindow/ModalWindow";
import EditTransactionForm from "../EditTransactionForm/EditTransactionForm";

const TransactionsList = () => {
  const transactions = useSelector(selectTransactions);
  const { mobileUser } = useRespons();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [localTransactions, setLocalTransactions] = useState(transactions);

  const openModal = (transaction) => {
    setSelectedTransaction(transaction);
    setIsModalOpen(true);
  };
  const handleDelete = (transactionId) => {
    setLocalTransactions(
      localTransactions.filter((t) => t.id !== transactionId)
    );
  };
  const closeModal = () => {
    setSelectedTransaction(null);
    setIsModalOpen(false);
  };

  if (!localTransactions.length) {
    return (
      <div className={s.filler}>
        <p>You don’t have any transactions now...</p>
      </div>
    );
  }

  const sortedTransactions = [...localTransactions].sort(
    (a, b) => new Date(b.transactionDate) - new Date(a.transactionDate)
  );

  return (
    <>
      {!mobileUser ? (
        <table className={s.wrapper}>
          <thead>
            <tr>
              <th>Date</th>
              <th className={s.type}>Type</th>
              <th>Category</th>
              <th>Comment</th>
              <th className={s.sum}>Sum</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {sortedTransactions.map((transaction, index) => (
              <TransactionsItem
                key={transaction.id}
                transaction={transaction}
                openModal={() => openModal(transaction)}
                handleDelete={() => handleDelete(transaction.id)}
                index={index + 1}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <ul>
          {sortedTransactions.map((transaction, index) => (
            <TransactionsItem
              key={transaction.id}
              transaction={transaction}
              openModal={() => openModal(transaction)}
              handleDelete={() => handleDelete(transaction.id)}
              index={index + 1}
            />
          ))}
        </ul>
      )}
      {isModalOpen && selectedTransaction && (
        <ModalWindow isOpen={isModalOpen} onClose={closeModal}>
          <EditTransactionForm
            transaction={selectedTransaction}
            onClose={closeModal}
          />
        </ModalWindow>
      )}
    </>
  );
};

export default TransactionsList;
