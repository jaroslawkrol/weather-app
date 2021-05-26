export class Logger {
  feature: string;

  constructor(feature: string) {
    this.feature = feature;
  }

  public debug = (msg: string) => {
    console.debug(`[${this.feature}] [${new Date().toLocaleTimeString()}] ${msg}`);
  };

  public warn = (msg: string) => {
    console.warn(`[${this.feature}] [${new Date().toLocaleTimeString()}] ${msg}`);
  };
}
