import React from "react";
import { StepConnector as MuiStepConnector } from "@mui/material";
import { stepConnectorClasses } from "@mui/material/StepConnector";

const StepConnector: React.FC = () => {
    return (
        <MuiStepConnector
            sx={{
                [`& .${stepConnectorClasses.line}`]: {
                    ml: 1,
                    width: 2,
                    bgcolor: "#BDBDBD",
                },
            }}
        />
    );
};

export default StepConnector;
