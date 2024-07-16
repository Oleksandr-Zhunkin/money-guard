import StatisticDashboard from "../../components/StatisticsDashboard/StatisticDashboard";
import StatisticsTable from "../../components/StatisticsTable/StatisticsTable";
import s from "./Statistics.module.scss";
const Statistics = () => {
  return (
    <div className={s.box}>
      <StatisticDashboard />
      <StatisticsTable />
    </div>
  );
};
export default Statistics;
