import dayjs from "dayjs";

export const dateFilter = (date) => {
  if (!date) {
    return "暂无时间";
  }
  return dayjs(date).format("YYYY-MM-DD HH:mm:ss");
};

export const dateFilterYM = (date) => {
  if (!date) {
    return "暂无时间";
  }
  return dayjs(date).format("YYYY-MM-DD");
};
