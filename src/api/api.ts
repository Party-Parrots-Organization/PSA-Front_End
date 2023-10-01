import { FormType } from "../types/form";
import { PortType } from "../types/port";
import { ShipType } from "../types/ship";
import { instance } from "./instance";

export const getShips = async () => {
    try {
        const { data: ships } = await instance.get("/ships");
        return ships as ShipType[];
    } catch (e) {
        throw e;
    }
};

export const getPorts = async () => {
    try {
        const { data: ports } = await instance.get("/ports");
        return ports as PortType[];
    } catch (e) {
        throw e;
    }
};

export const getETA = async (data: FormType) => {
    try {
        const { checkpoints, origin_port, destination_port, departure_date, ship } =
            data;
        const formatted = {
            port_list: [origin_port, ...checkpoints, destination_port],
            departure_date: departure_date.format("YYYY-MM-DD HH:mm:ss"),
            imo: ship
        }

        const { data: ETAs } = await instance.post("/eta", formatted);
        return ETAs as string[];
    } catch (e) {
        console.log(e)
        throw e;
    }
};
