const searchName = (value: string | null) => {
  if (value === null) {
    console.log("there is nothing to search");
  } else {
    console.log("searching");
  }
};
// searchName(null)

const getSpeed = (speed: unknown) => {
  console.log(speed);
  if (typeof speed === "number") {
    const convertedSpeed = (speed * 1000) / 3600;
    console.log(convertedSpeed);
  }
  if (typeof speed === "string") {
    const [value, unit] = speed.split(" ");
    const convertedSpeed = (parseInt(value) * 1000) / 3600;
    console.log(convertedSpeed);
  } else {
    console.log("type error");
  }
};
const throwError = (message: string): never => {
  throw new Error(message);
};
getSpeed(10);
getSpeed("10 km ");
throwError("new error")
