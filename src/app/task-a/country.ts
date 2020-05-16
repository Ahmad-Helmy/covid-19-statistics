export interface ICountry {
  name: string;
  cases: number;
  deaths: number;
  recoverd: number;
  date: { day: number; month: number; year: number };
  Lat?: number;
  Lon?: number;
  code?: string;
}
