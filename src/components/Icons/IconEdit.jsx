import s from "../TransactionsItem/TransactionsItem.module.css";

const IconEdit = () => {
  return (
    <div className={s.iconWrapper}>
      <svg
        className={s.iconEdit}
        width="14"
        height="13"
        viewBox="0 0 14 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.5 5.33343L8.16666 3.0001M1.45831 12.0418L3.43253 11.8224C3.67373 11.7956 3.79433 11.7822 3.90706 11.7457C4.00707 11.7133 4.10224 11.6676 4.19 11.6097C4.28891 11.5445 4.37471 11.4587 4.54632 11.2871L12.25 3.58343C12.8943 2.9391 12.8943 1.89443 12.25 1.25009C11.6057 0.605763 10.561 0.605762 9.91666 1.25009L2.21299 8.95375C2.04138 9.12536 1.95558 9.21116 1.89035 9.31008C1.83248 9.39783 1.78674 9.49301 1.75436 9.59302C1.71787 9.70574 1.70447 9.82635 1.67767 10.0675L1.45831 12.0418Z"
          stroke="white"
          strokeOpacity="0.6"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default IconEdit;
