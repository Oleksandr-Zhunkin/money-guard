export const fetchCurrency = async () => {
  const response = await fetch("https://api.monobank.ua/bank/currency");
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
};
export const getCurrency = async () => {
  const cachedCurrency = JSON.parse(localStorage.getItem("currency"));
  const now = Date.now();

  if (cachedCurrency && now - cachedCurrency.date < 3600000) {
    return cachedCurrency;
  }

  try {
    const data = await fetchCurrency();
    data.date = now;
    localStorage.setItem("currency", JSON.stringify(data));
    return data;
  } catch (err) {
    throw new Error(`Failed to fetch currency data: ${err.message}`);
  }
};
