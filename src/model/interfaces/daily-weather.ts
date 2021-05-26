export interface DailyWeather {
  id: string;
  date: string;
  dayOfWeek: string;
  type?: string;
  description?: string;
  morningTemperature: number;
  dayTemperature: number;
  nightTemperature: number;
  humidity: number;
  minimum: number;
  maximum: number;
  mean: number;
  median: number;
}
