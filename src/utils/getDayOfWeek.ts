export const getDayOfWeek = (date: string) => {
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const formattedDate = new Date(date);
  const dayOfWeek = formattedDate.getDay();
  return days[dayOfWeek];
};
