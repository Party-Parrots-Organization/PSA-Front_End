import { Dayjs } from "dayjs";

export interface FormType {
    checkpoints: string[];
    origin_port: string;
    destination_port: string;
    departure_date: Dayjs;
    ship: number;
}

export interface ETA {
    eta: Dayjs;
    weather: Weather;
}

export interface Weather {
    cloudCoverAvg: number;
    dewPointAvg: number;
    humidityAvg: number;
    pressureSurfaceLevelAvg: number;
    rainIntensityAvg: number;
    sleetIntensityAvg: number;
    snowIntensityAvg: number;
    temperatureAvg: number;
    visibilityAvg: number;
    weatherCodeMax: number;
    weatherDelay: number;
    windDirectionAvg: number;
    windSpeedAvg: number;
}
