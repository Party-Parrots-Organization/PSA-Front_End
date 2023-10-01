import React from "react";
import { StepIcon1, StepIcon2, StepIcon3 } from "./StepIcons";
import { StepLabel, StepContent, Typography } from "@mui/material";

interface StepNLabelProps {
    label: string;
    ETA: string;
    loc?: "start" | "end";
}

const StepNLabel: React.FC<StepNLabelProps> = ({ label, ETA, loc }) => {
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
                <Typography variant="subtitle1">
                    Other weather statistics
                </Typography>
            </StepContent>
        </>
    );
};

export default StepNLabel;
