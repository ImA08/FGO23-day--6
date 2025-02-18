// TASK 2

const getUser = new Promise((resolve, reject) => {
  const success = true;
  const user = {
    id: 1,
    name: "APEP",
    age: 27,
    isMarried: false,
  };
  setTimeout(() => {
    if (success) return resolve(user);
    reject(new Error("Terjadi Kesalahan"));
  }, 1);
});

const userBuy = (userId) => {
  return new Promise((resolve, reject) => {
    if (userId !== 1) return reject(new Error("Terjadi Kesalahan"));
    const success = true;

    const buy = [
      {
        productId: 1,
        qty: 1,
        price: 1000000,
      },
      {
        productId: 2,
        qty: 4,
        price: 500000,
      },
    ];
    setTimeout(() => {
      if (success) return resolve(buy);
      reject(new Error("Terjadi Kesalahan"));
    }, 1);
  });
};

const menghitungBelanja = (totPembelian) => {
  let discount, totalBayar;

  if (totPembelian < 500000) {
    discount = 0;
  } else if (totPembelian <= 1000000) {
    discount = 5 / 100;
  } else {
    discount = 10 / 100;
  }

  totalBayar = totPembelian - totPembelian * discount;
  console.log(`Total pembayaran user = ${totalBayar}`);
};

getUser
  .then((user) => {
    const { id } = user;
    if (typeof id === "string") throw new Error("id has wrong type");
    return userBuy(id);
  })
  .then((buy) => {
    let totalPembelian = 0;
    buy.forEach((el) => {
      const { qty, price } = el;

      totalPembelian += qty * price;
    });
    return menghitungBelanja(totalPembelian);
  })
  .catch((err) => {
    console.log(err.message);
  });
