import {action} from 'typesafe-actions';

export const initialStore = () => action(ActionsType.INITIALSTORE);
export const initialData = () => action(ActionsType.INITIALDATA);
export const serverStatus = (data: any) =>
  action(ActionsType.SERVERSTATUS, data);
export const xtbStatus = (data: any) => action(ActionsType.XTBSTATUS, data);
export const maxLucro = (data: any) => action(ActionsType.MAXLUCRO, data);
export const maxPrejuizo = (data: any) => action(ActionsType.MAXPREJUIZO, data);
export const dataAction = (data: any) => action(ActionsType.DATA, data);
export const mode = (data: any) => action(ActionsType.MODE, data);
export const timer = (data: any) => action(ActionsType.TIMER, data);

export enum ActionsType {
  INITIALSTORE = 'INITIALSTORE',
  INITIALDATA = "INITIALDATA",
  SERVERSTATUS = ' SERVERSTATUS',
  XTBSTATUS = 'XTBSTATUS',
  MODE = 'MODE',
  MAXLUCRO = 'MAXLUCRO',
  MAXPREJUIZO = 'MAXPREJUIZO',
  DATA = 'DATA',
  TIMER = 'TIMER'
 
}
