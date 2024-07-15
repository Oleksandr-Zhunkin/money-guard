import { useDispatch } from "react-redux";
import ModalWindow from "../ModalWindow/ModalWindow";
import AddTransactionForm from "../IncomeTransaction/IncomeTransaction";
import s from "./ButtonAddTransaction.module.scss";

const ButtonAddTransaction = ({ toggleModal }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        className={s.fixedButton}
        onClick={() => toggleModal()}
        type="button"
      >
        Add
      </button>
    </div>
  );
};

export default ButtonAddTransaction;
