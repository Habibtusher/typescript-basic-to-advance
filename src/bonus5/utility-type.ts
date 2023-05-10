//pick
interface Personin {
  name: string;
  email?: string;
  contractinfo: string;
}

type Contact = Pick<Personin, "email" | "name">;

//omit
type Name = Omit<Personin, "email" | "contractinfo">;

//partial

//to make all properties optional

type Optional = Partial<Personin>;
type RequiredType = Required<Personin>;

const newPerson: Readonly<Personin> = {
  name: "ffdf",
  email: "tt",
  contractinfo: "fd",
};


//Record

// type myObj ={
//     a:string,
//     b:string,
//     c:string
// }

// record
type myObj=Record<'a'|'b'|'c',string>
// type myObj={
//     [key:string]:string
// }
const obj:myObj = {
    a:"f",
    b:"b",
    c:"c"
}