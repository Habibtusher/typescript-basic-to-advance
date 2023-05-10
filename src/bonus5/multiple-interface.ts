interface IMergeInterface<Tdata,Tmethode> {
data:Tdata;
methode:Tmethode
}

interface IUser1 {
    fname:string;
    lname:string
}

interface IMethode {
    getFullName():string
}

type model =IMergeInterface<IUser1,IMethode>;

class Usser implements model {
    data: IUser1;
    methode: IMethode;


    constructor( fname:string, lname:string) {
        this.data = {fname,lname};
        this.methode ={
          getFullName :()=>{
            return `jj`
          }
        }
    }
}