import { AVAILABLE_TABLES } from "../components/booking-form/booking-form.constants";

const seededRandom = (seed) => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;

  return () => (s = (s * a) % m) / m;
};

const fetchAPI = (date) => {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) result.push(i + ":00");
    if (random() < 0.5) result.push(i + ":30");
  }

  return result;
};

const fetchTables = (date) => {
  const availableTablesRandomized = AVAILABLE_TABLES.map((table) => ({
    ...table,
    availability: Math.random() < 0.5,
  }));

  return availableTablesRandomized;
};

const submitAPI = (formData) => true;

export { fetchAPI, submitAPI, fetchTables };
