import { Step, Stepper } from "@mui/material";
import React from "react";
import StepConnector from "./sub-components/StepConnector";
import StepNLabel from "./sub-components/StepNLabel";
import { useFormContext } from "react-hook-form";
import dayjs from "dayjs";

const JourneyStepper: React.FC = () => {
    const {
        watch,
        getValues,
        formState: { isDirty },
    } = useFormContext();
    const {
        checkpoints: checkpointsWatcher,
        origin_port: originWatcher,
        destination_port: destWatcher,
        departure_date: dateWatcher,
        ETAs
    } = watch();
    const formValues = getValues();
    const { checkpoints, origin_port, destination_port, departure_date } =
        formValues;

    return (
        <Stepper orientation="vertical" connector={<StepConnector />}>
            <Step active>
                <StepNLabel
                    loc="start"
                    label={originWatcher ? origin_port : "Source Port"}
                    ETA={
                        dateWatcher
                            ? departure_date.format("DD MMM YYYY - HH:mm")
                            : "Unknown"
                    }
                />
            </Step>
            {checkpointsWatcher &&
                checkpoints.length > 0 &&
                (checkpoints as []).map((cp, index) => (
                    <Step active key={index}>
                        <StepNLabel
                            label={cp}
                            ETA={ETAs && !isDirty ? dayjs(ETAs[index]).format("DD MMM YYYY - HH:mm") : "Computing"}
                        />
                    </Step>
                ))}
            <Step active>
                <StepNLabel
                    loc="end"
                    label={destWatcher ? destination_port : "destination_port"}
                    ETA={ETAs && !isDirty ? dayjs(ETAs[ETAs.length - 1]).format("DD MMM YYYY - HH:mm") : "Computing"}
                />
            </Step>
        </Stepper>
    );
};

export default JourneyStepper;
