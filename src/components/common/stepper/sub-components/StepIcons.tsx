import { Box } from "@mui/material";
import React from "react";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import PinDropIcon from "@mui/icons-material/PinDrop";
import FlagIcon from "@mui/icons-material/Flag";

const boxStyles = {
    bgcolor: "#000",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
};

const StepIcon1: React.FC = () => {
    return (
        <Box sx={boxStyles}>
            <ExploreOutlinedIcon />
        </Box>
    );
};

const StepIcon2: React.FC = () => {
    return (
        <Box sx={boxStyles}>
            <PinDropIcon />
        </Box>
    );
};

const StepIcon3: React.FC = () => {
    return (
        <Box sx={boxStyles}>
            <FlagIcon />
        </Box>
    );
};

export { StepIcon1, StepIcon2, StepIcon3 };
