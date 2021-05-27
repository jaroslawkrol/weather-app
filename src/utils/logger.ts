export class Logger {
  feature: string;

  constructor(feature: string) {
    this.feature = feature;
  }

  public debug = (msg: string): void => {
    console.debug(`[${this.feature}] [${new Date().toLocaleTimeString()}] ${msg}`);
  };

  public warn = (msg: string): void => {
    console.warn(`[${this.feature}] [${new Date().toLocaleTimeString()}] ${msg}`);
  };
}
