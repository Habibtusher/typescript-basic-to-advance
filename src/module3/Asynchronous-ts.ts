const payment = false;
const start = ():Promise<string> => {
  console.log("starting");
  const promise = new Promise<string>((resolved, reject) => {
    setTimeout(() => {
      if (payment) {
        resolved("promise resolved");
      } else {
        reject("promise rejected");
      }
    }, 2000);
  });
  return promise;
};

const result = async ():Promise<void> => {
  try {
    const data = await start();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
result();
