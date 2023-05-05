type NoobDeveloper = {
  name: string;
};
type JuniorDeveloper = NoobDeveloper & {
  expertise: string;
  experience: number;
};
// enum Level {
//     junior="Junior",
//     mid="Mid",
//     senior="Senior"
// }
type NextLevelDev = JuniorDeveloper &{
    leadershipEx : number,
    level: string
}
const newDeveloper:NextLevelDev | JuniorDeveloper = {
  name: "habib",
  expertise:"js",
  experience:2,
  
};
const newDeveloper2: JuniorDeveloper ={
  name:"habib",
  expertise: "f",
  experience: 1
}