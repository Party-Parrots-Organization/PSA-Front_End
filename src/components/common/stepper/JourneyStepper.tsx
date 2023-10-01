import { Step, Stepper } from "@mui/material";
import React from "react";
import StepConnector from "./sub-components/StepConnector";
import StepNLabel from "./sub-components/StepNLabel";

const data = [
    {
        label: "CA VAN",
        ETA: "12:00pm 30 Oct 2023",
    },
    {
        label: "IN JGD",
        ETA: "12:00pm 30 Oct 2023",
    },
    {
        label: "SG",
        ETA: "12:00pm 30 Oct 2023",
    },
];

const JourneyStepper: React.FC = () => {
    return (
        <Stepper orientation="vertical" connector={<StepConnector />}>
            {data.map(({ label, ETA }, index) => (
                <Step active key={index}>
                    <StepNLabel length={data.length} index={index} label={label} ETA={ETA} />
                </Step>
            ))}
        </Stepper>
    );
};

export default JourneyStepper;
