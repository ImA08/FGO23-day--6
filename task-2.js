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
        price: 250000,
      },
      {
        productId: 2,
        qty: 4,
        price: 400000,
      },
    ];
    setTimeout(() => {
      if (success) return resolve(buy);
      reject(new Error("Terjadi Kesalahan"));
    }, 1);
  });
};

const menghitungBelanja = (totPembelian) => {
  if (totPembelian === 0) {
    return console.log("User belum melakukan pembelian!");
  }

  let discount, totalBayar, totalDiscount;
  const success = true;

  return new Promise((resolve, reject) => {
    if (totPembelian < 500000) {
      discount = 0;
    } else if (totPembelian <= 1000000) {
      discount = 5 / 100;
    } else {
      discount = 10 / 100;
    }

    totalDiscount = totPembelian * discount;
    totalBayar = totPembelian - totalDiscount;
    console.log(`
        Total pembelian user = ${totPembelian}
        Total discount user ( ${discount * 100}% ) = ${totalDiscount}
        Total pembayaran user = ${totalBayar}`);

    setTimeout(() => {
      if (success) return resolve();
      reject(new Error("Terjadi Kesalahan"));
    }, 1);
  });
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
