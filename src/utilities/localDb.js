const addToLocalDb = (breakTime) => {
  let time = {};

  const local = localStorage.getItem("time");
  if (local) {
    time = JSON.parse(local);
  }

  time.breakTime = breakTime;
  time = JSON.stringify(time);
  localStorage.setItem("time", time);
};

const retrieveFromLocalDb = () => {
  let time = {};

  const local = localStorage.getItem("time");
  if (local) {
    time = JSON.parse(local);
  }

  return time;
};

export { addToLocalDb, retrieveFromLocalDb };
