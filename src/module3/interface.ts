type User = {
  name: string;
  age: number;
};
interface IUser {
  name: string;
  age: number;
}
const userWithTypeAlias: User = {
  name: "vd",
  age: 12,
};
interface IExtededUser extends IUser {
  role: string;
}

const user1: IExtededUser = {
  name: "df",
  age: 122,
  role: "e",
};
console.log(user1);