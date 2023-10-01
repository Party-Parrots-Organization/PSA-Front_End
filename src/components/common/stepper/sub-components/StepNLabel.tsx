import React from "react";
import { StepIcon1, StepIcon2, StepIcon3 } from "./StepIcons";
import { StepLabel, StepContent, Typography } from "@mui/material";
import { Weather } from "../../../../types/form";
import WeatherDisplay from "./WeatherDisplay";

interface StepNLabelProps {
    label: string;
    ETA: string;
    weather?: Weather;
    loc?: "start" | "end";
}

const StepNLabel: React.FC<StepNLabelProps> = ({
    label,
    ETA,
    loc,
    weather,
}) => {
    return (
        <>
            <StepLabel
                StepIconComponent={
                    loc === "start"
                        ? StepIcon1
                        : loc === "end"
                        ? StepIcon3
                        : StepIcon2
                }
            >
                <Typography ml={1} fontWeight="bold">
                    {label}
                </Typography>
            </StepLabel>
            <StepContent
                sx={{
                    ml: 2.5,
                    borderLeft: "3px solid #BDBDBD",
                }}
            >
                <Typography variant="h3">{`${
                    loc === "start" ? `Departure` : `ETA`
                }: ${ETA}`}</Typography>
                {weather && <WeatherDisplay weather={weather} />}
            </StepContent>
        </>
    );
};

export default StepNLabel;
