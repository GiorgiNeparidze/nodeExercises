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

async function getResults(player) {
  try {
    const resoutsPlayer = await luckyDraw(player);
    return resoutsPlayer;
  } catch (error) {
    console.log(error);
  }
}

console.log(getResults("Tina"), getResults("Jorge"), getResults("Julien"));
