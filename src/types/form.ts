import { Dayjs } from "dayjs";

export interface FormType {
    checkpoints: string[];
    origin_port: string;
    destination_port: string;
    departure_date: Dayjs;
    ship: number;
}
