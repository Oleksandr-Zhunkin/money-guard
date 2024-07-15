import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { selectSummary } from "../../redux/categories/selectors";
import s from "./StatisticDashboard.module.scss";

ChartJS.register(ArcElement, Tooltip, Legend);

const StatisticDashboard = () => {
  const { categoriesSummary, periodTotal } = useSelector(selectSummary);
  const summary = categoriesSummary
    .filter((items) => items.type !== "INCOME")
    .map((item) => item.total);

  const data = {
    labels: [],
    datasets: [
      {
        label: "# of Votes",
        data: summary,
        backgroundColor: [
          "#81e1ff",
          "#4a56e2",
          "#ffd8d0",
          "#fed057",
          "#fd9498",
          "#00ad84",
          "#6e78e8",
          "#c5baff",
          "#24cca7",
        ],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        borderWidth: 0,
      },
    ],
  };
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Statistics</h2>
      <Doughnut data={data} />
      <p className={s.balance}>₴ {periodTotal}</p>
    </div>
  );
};
export default StatisticDashboard;
