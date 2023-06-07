



// const res = [];
// for (let i = 1; i <= len; i += 1) {
//   res.push(i * 2 - 1);  return new Date(endDate - startDate).toISOString().split('T')[1].slice(0, -1);
// }
// return res;
function newDateToString(startDate, endDate) {
  const newDate = (endDate.getTime() - startDate.getTime());
  const hours = (newDate / (60 * 60 * 1000));
  const min = ((newDate / (60 * 1000)) % 60);
  const sec = ((newDate / 1000) % 60);
  const milsec = newDate % 1000;
  console.log(newDate, hours, mz)
  
}

console.log(newDateToString(new Date(2000,1,1,10,0,0), new Date(2000,1,1,11,0,0)))