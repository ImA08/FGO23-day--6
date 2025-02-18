// TASK 1 ASYNCHRONUS

const myFunc = (n, cb) => {
  if (!(cb instanceof Function)) return;
  let delay = 0;
  for (let i = 1; i <= n; i++) {
    delay += 1000;
    setTimeout(() => {
      cb(i);
      console.log(`detik ke - ${i}`);
    }, delay);
  }
};

myFunc(5, (i) => {
  console.log(i);
});
