import dayjs from "dayjs";

export const dateFilter = (date) => {
  return dayjs(date).format("YYYY-MM-DD HH:mm:ss");
};

export const dateFilterYM = (date) => {
  return dayjs(date).format("YYYY-MM-DD");
};
