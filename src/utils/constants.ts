export const Constants = {
  DATE_FORMAT: 'Do MMM YYYY',
  DAY_OF_WEEK_FORMAT: 'dddd',
  DEFAULT_CITY_NAME: 'Warsaw',
  API: {
    BASE_URL: 'https://api.openweathermap.org/data/2.5',
    ONE_CALL: '/onecall',
    FORECAST: '/forecast',
  },
  OPEN_WEATHER: {
    UNITS: 'metric',
    ONE_CALL_EXCLUDED: 'current,minutely,hourly,alerts',
    ONE_CALL_MAX_RESULTS: 5,
    FORECAST_CNT: 1,
  },
};
