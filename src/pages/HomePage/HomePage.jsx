import { useState } from "react";
import Balance from "../../components/Balance/Balance";
import TransactionsList from "../../components/TransactionsList/TransactionsList";
import AddTransactionForm from "../../components/AddTransactionForm/AddTransactionForm";
import ButtonAddTransactions from "../../components/ButtonAddTransaction/ButtonAddTransaction";
import ModalWindow from "../../components/ModalWindow/ModalWindow"; // Import ModalWindow
import useRespons from "../../hooks/useRespons";

import s from "./HomePage.module.css";

export default function HomePage() {
  const { mobileUser } = useRespons();
  const [isModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className={s.tab}>
      {mobileUser && <Balance />}
      <TransactionsList />
      <ButtonAddTransactions onClick={toggleModal} className={s.fixedButton} />
      <ModalWindow isOpen={isModalOpen} onClose={toggleModal}>
        <AddTransactionForm closeModal={toggleModal} />
      </ModalWindow>
    </div>
  );
}
