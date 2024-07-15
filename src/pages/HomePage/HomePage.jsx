import { useEffect, useState } from "react";
import Balance from "../../components/Balance/Balance";
import TransactionsList from "../../components/TransactionsList/TransactionsList";
import AddTransactionForm from "../../components/AddTransactionForm/AddTransactionForm";
import ButtonAddTransactions from "../../components/ButtonAddTransaction/ButtonAddTransaction";
import ModalWindow from "../../components/ModalWindow/ModalWindow";

import s from "./HomePage.module.css";
import { useDispatch } from "react-redux";
import { getTransactionsThunk } from "../../redux/transactions/operations";

export default function HomePage() {
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  useEffect(() => {
    dispatch(getTransactionsThunk());
  }, [dispatch]);

  return (
    <div className={s.tab}>
      <TransactionsList />
      <ButtonAddTransactions toggleModal={toggleModal} />
      <ModalWindow isOpen={isModalOpen} onClose={toggleModal}>
        <AddTransactionForm closeModal={toggleModal} />
      </ModalWindow>
    </div>
  );
}
