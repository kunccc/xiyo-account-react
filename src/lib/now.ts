const now = () => {
  const time = new Date();
  const year = time.getFullYear().toString();
  let month = (time.getMonth() + 1).toString();
  let date = time.getDate().toString();
  if (month.length === 1) month = '0' + month;
  if (date.length === 1) date = '0' + date;
  const fullNow = year + '-' + month + '-' + date;
  const now = year + '-' + month;
  return {fullNow, now};
};

export {now};