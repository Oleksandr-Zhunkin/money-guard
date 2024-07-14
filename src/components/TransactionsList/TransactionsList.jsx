import PropTypes from "prop-types";
import TransactionsItem from "../TransactionsItem/TransactionsItem";
import useRespons from "../../hooks/useRespons";
import s from "./TransactionsList.module.css";

const TransactionsList = ({ transactions }) => {
  const { mobileUser } = useRespons();

  if (!transactions.length) {
    return (
      <div className={s.emptyBox}>
        <p>You don’t have any transactions now...</p>
      </div>
    );
  }

  return (
    <>
      {!mobileUser ? (
        <div className={s.wrapper}>
          <table>
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
              {transactions
                .toSorted(
                  (a, b) =>
                    new Date(b.transactionDate) - new Date(a.transactionDate)
                )
                .map((transaction) => (
                  <TransactionsItem
                    key={transaction.id}
                    transaction={transaction}
                  />
                ))}
            </tbody>
          </table>
        </div>
      ) : (
        <ul className={s.listTrans}>
          {transactions
            .toSorted(
              (a, b) =>
                new Date(b.transactionDate) - new Date(a.transactionDate)
            )
            .map((transaction) => (
              <TransactionsItem
                key={transaction.id}
                transaction={transaction}
              />
            ))}
        </ul>
      )}
    </>
  );
};

TransactionsList.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      transactionDate: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      categoryId: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default TransactionsList;
