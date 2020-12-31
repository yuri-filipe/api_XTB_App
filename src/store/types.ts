import { Data, StateType } from "../hooks/types";

export interface StoreType {
    serverStatus:any
    xtbStatus:any
    mode:boolean
    maxLucro:number
    maxPrejuizo:number
    data:Data
    timer:string
}
 