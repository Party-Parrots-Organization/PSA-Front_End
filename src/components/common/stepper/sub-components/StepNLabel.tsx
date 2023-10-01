import React from "react";
import { StepIcon1, StepIcon2, StepIcon3 } from "./StepIcons";
import { StepLabel, StepContent, Typography } from "@mui/material";

interface StepNLabelProps {
    label: string;
    ETA: string;
    index: number;
    length: number;
}

const StepNLabel: React.FC<StepNLabelProps> = ({
    label,
    ETA,
    index,
    length,
}) => {
    return (
        <>
            <StepLabel
                StepIconComponent={
                    index === 0
                        ? StepIcon1
                        : index === length - 1
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
                <Typography variant="h3">{`ETA: ${ETA}`}</Typography>
                <Typography variant="subtitle1">
                    Other weather statistics
                </Typography>
            </StepContent>
        </>
    );
};

export default StepNLabel;
