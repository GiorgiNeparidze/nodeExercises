function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}


luckyDraw("Joe").then(
  function (resolve) {
    console.log(resolve);
  },
  function (reject) {
    console.log(reject);
  }
);

luckyDraw("Caroline").then(
  function (resolve) {
    console.log(resolve);
  },
  function (reject) {
    console.log(reject);
  }
);

luckyDraw("Sabrina").then(
  function (resolve) {
    console.log(resolve);
  },
  function (reject) {
    console.log(reject);
  }
);
