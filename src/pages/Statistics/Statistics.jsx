import { useEffect, useState } from "react";
import StatisticDashboard from "../../components/StatisticsDashboard/StatisticDashboard";
import StatisticDatePicker from "../../components/StatisticsDataPicker/StatisticsDatePicker";
import StatisticsTable from "../../components/StatisticsTable/StatisticsTable";
import s from "./Statistics.module.scss";
import { useSelector } from "react-redux";
import { selectSummary } from "../../redux/categories/selectors";
import { selectPeriodTransaction } from "../../redux/transactions/selectors";
import { getYear } from "date-fns";
const currentYear = getYear(new Date());
const Statistics = () => {
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [category, setCategory] = useState(null);
  const summaryPeriod = useSelector(selectSummary);
  const period = useSelector(selectPeriodTransaction);
  console.log(selectedMonth);

  useEffect(() => {
    if (!period) {
      setCategory(summaryPeriod);
    } else {
      if (selectedMonth === null) {
        setCategory(summaryPeriod);
        return;
      }
      setCategory(period);
      // setCategory(summaryPeriod);
    }
  }, [period, summaryPeriod, selectedMonth, selectedYear]);
  return (
    <div className={s.box}>
      <StatisticDashboard category={category} />
      <div>
        <StatisticDatePicker
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
          currentYear={currentYear}
        />
        <StatisticsTable category={category} />
      </div>
    </div>
  );
};
export default Statistics;
