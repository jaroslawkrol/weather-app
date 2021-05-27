# WeatherApp

## Introduction

The application communicates with the OpenWeather API. It displays data about the current weather in your location or in a place in the world selected by the user.

## Used Libraries

- **React Native (0.64.1)**
- **Axios** - API communication
- **MobX** - state management
- **@react-native-community/geolocation** - Getting user current location
- **react-native-dotenv** - Environmental variables
- **react-native-vector-icons** - Icons
- **@react-native-async-storage/async-storage** - storing data about last used location

## Usage

### 1. Insert your OpenWeather API key

To run the project locally, firstly create a file called `.env` in the root directory. Its content should look like below:

```

OPEN_WEATHER_KEY=your_open_weather_api_key

```

where you should replace `your_open_weather_api_key` with [YOUR OWN API KEY](https://home.openweathermap.org/api_keys)

### 2. Install dependencies

To install all required dependecies just execute command:

`npm install` for NPM or `yarn install` for Yarn.

### 3. Cocoapods

CocoaPods on iOS needs this extra step:

```
npx pod-install
```

### 4. Run application

To run application use default React Native CLI command

For IOS:

```
react-native run-ios
```

For Android:

```
react-native run-android
```

**Enjoy!**

## Author

**Jarosław Król**

* jaroslawkrol11@gmail.com
* [Stackoverflow](https://stackoverflow.com/users/6848233/jaroslaw-k)
* [Linkedin](https://www.linkedin.com/in/jaros%C5%82aw-kr%C3%B3l-1b464211a/)
