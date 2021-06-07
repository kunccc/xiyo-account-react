const now = () => {
  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const date = time.getDate();
  const fullNow = year + '-' + month + '-' + date
  const now = year + '-' + month
  return {fullNow, now};
};

export {now};