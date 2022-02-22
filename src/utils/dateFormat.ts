function dateInRMDFormat(date: Date) {
  let day, month;
  if (date.getDate() < 10) {
    day = '0' + date.getDate();
  } else {
    day = date.getDate();
  }

  if (date.getMonth() + 1 < 10) {
    month = '0' + (date.getMonth() + 1);
  } else {
    month = date.getMonth() + 1;
  }
  return date.getFullYear() + '-' + month + '-' + day;
}
