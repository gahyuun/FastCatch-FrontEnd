export const calculateNightStay = (startDate: string, endDate: string) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const timeDiff = end.getTime() - start.getTime();

  const nightStay = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return nightStay;
};
