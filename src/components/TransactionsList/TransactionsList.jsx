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

  const openModal = (transaction) => {
    setSelectedTransaction(transaction);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedTransaction(null);
    setIsModalOpen(false);
  };

  if (!transactions.length) {
    return (
      <div className={s.filler}>
        <p>You don’t have any transactions now...</p>
      </div>
    );
  }

  const sortedTransactions = transactions.toSorted(
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
            {sortedTransactions.map((transaction) => (
              <TransactionsItem
                key={transaction.id}
                transaction={transaction}
                openModal={() => openModal(transaction)}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <ul>
          {sortedTransactions.map((transaction) => (
            <TransactionsItem
              key={transaction.id}
              transaction={transaction}
              openModal={() => openModal(transaction)}
            />
          ))}
        </ul>
      )}
      {isModalOpen && selectedTransaction && (
        <ModalWindow isOpen={isModalOpen} onClose={closeModal}>
          <EditTransactionForm
            transaction={selectedTransaction}
            closeModal={closeModal}
          />
        </ModalWindow>
      )}
    </>
  );
};

export default TransactionsList;
