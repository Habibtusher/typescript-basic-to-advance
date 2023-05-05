type a1 = string;
type a2 = a1 extends string ? string : null

//also can use multiple conditions


type Sheikh = {
    wife1: string,
    wife2: string
}
type newbbb= keyof Sheikh

type CheckProperty<X,Y> = Y extends keyof X ? true: false
type CheckWife = CheckProperty<Sheikh,"wife1">


type Friends ="hh" | "gg" |"jj";

type RemoveFrienda<T,X>= T extends X ? never : T;

type CurrentFriends = RemoveFrienda<Friends,"gg">