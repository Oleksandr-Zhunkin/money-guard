// HomePage.jsx

import { useState, useEffect } from "react";
import Balance from "../../components/Balance/Balance";
import TransactionsList from "../../components/TransactionsList/TransactionsList";
import AddTransactionForm from "../../components/AddTransactionForm/AddTransactionForm";
import ButtonAddTransactions from "../../components/ButtonAddTransaction/ButtonAddTransaction";

import s from "./HomePage.module.css";

const HomePage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [userBalance, setUserBalance] = useState(0);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  useEffect(() => {

    const fetchData = async () => {
      try {
        const fetchedTransactions = [
          {
            id: "1",
            transactionDate: "2024-07-12",
            type: "EXPENSE",
            categoryId: "1",
            comment: "Groceries",
            amount: 50.0,
          },
          {
            id: "2",
            transactionDate: "2024-07-11",
            type: "EXPENSE",
            categoryId: "2",
            comment: "Utilities",
            amount: 75.5,
          },
          {
            id: "3",
            transactionDate: "2024-07-10",
            type: "EXPENSE",
            categoryId: "3",
            comment: "Rent",
            amount: 1000.0,
          },
        ];

        const fetchedUserBalance = 1500.0; 

        setTransactions(fetchedTransactions);
        setUserBalance(fetchedUserBalance);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={s.tab}>
      <Balance userBalance={userBalance} />
      <TransactionsList transactions={transactions} />
      <ButtonAddTransactions onClick={toggleModal} className={s.fixedButton} />
      {isModalOpen && <AddTransactionForm closeModal={toggleModal} />}
    </div>
  );
};

export default HomePage;
