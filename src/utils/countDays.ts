const countDays = (start:string, end:string) => {
  const d1 = new Date(start)
  const d2 = new Date(end)

  const msec = d2.getTime() - d1.getTime();
  const days = msec / (1000*60*60*24) +1;
  return days;
}

export default countDays;