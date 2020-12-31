export interface Data{
  balance: number;
  margin: number;
  currency: string;
  credit: number;
  equityFX: number;
  equity: number;
  margin_free: number;
  margin_level: number;
  stockValue: number;
  stockLock: number;
  cashStockValue: number;
}

export interface StateType {
  xtbStatus: null | string;
  serverStatus:boolean
  data: Data
}
export  const State = {
  xtbStatus: null,
  serverStatus:false,
  data: {
    balance: 0,
    margin: 0,
    currency: 'USD',
    credit: 0,
    equityFX: 0,
    equity: 0,
    margin_free: 0,
    margin_level: 0,
    stockValue: 0,
    stockLock: 0,
    cashStockValue: 0,
  },
};
