import { useSelector } from "react-redux";
import {
  selectCategories,
  selectSummary,
} from "../../redux/categories/selectors";
import s from "./StatisticsTable.module.scss";
import { selectTransactions } from "../../redux/transactions/selectors";

export const StatisticsTable = () => {
  const color = [
    "#81e1ff",
    "#4a56e2",
    "#ffd8d0",
    "#fed057",
    "#fd9498",
    "#00ad84",
    "#6e78e8",
    "#c5baff",
    "#24cca7",
  ];
  const { categoriesSummary, expenseSummary, incomeSummary } =
    useSelector(selectSummary);
  const transactions = useSelector(selectTransactions);
  const dates = transactions.map((transaction) => {
    const mouth = +transaction.transactionDate.slice(6, 7);
    const year = +transaction.transactionDate.slice(0, 4);
    console.log(year, mouth);
  });
  const data = Date(transactions.transactionDate);
  //   console.log(data.getMouth());
  const date = new Date(transactions.transactionDate);
  const monthIndex = date.getMonth();
  console.log(transactions.transactionDate);

  return (
    <div className={s.wrapper}>
      <div className={s.box}>
        <p className={s.title}>Categories</p>
        <p className={s.title}>Sum</p>
      </div>
      <ul>
        {categoriesSummary
          .filter((items) => {
            return items.type !== "INCOME";
          })
          .map((item, index) => {
            return (
              <li key={item.name} className={s.item}>
                <div className={s.box_item}>
                  <div
                    className={s.box_category}
                    style={{ backgroundColor: color[index] }}
                  ></div>
                  <p>{item.name}</p>
                </div>
                <p>{item.total}</p>
              </li>
            );
          })}
        <li className={s.total}>
          <p>Expenses:</p>
          <p className={s.expense}>{expenseSummary}</p>
        </li>
        <li className={s.total}>
          <p>Income:</p>
          <p className={s.income}>{incomeSummary}</p>
        </li>
      </ul>
    </div>
  );
};
export default StatisticsTable;
