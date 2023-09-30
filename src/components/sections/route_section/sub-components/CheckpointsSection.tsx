import React from "react";
import CheckPointFieldArray from "./checkpoint-fields/CheckpointFieldArray";
import { Grid, Typography } from "@mui/material";

const CheckPointSection: React.FC = () => {
    return (
        <Grid container direction="column" pl="2vw" rowGap={2}>
            <Typography variant="subtitle1">
                Please input all the checkpoints that you expect the ship to
                pass through (If none, the system will default to no
                intermediary checkpoints)
            </Typography>
            <CheckPointFieldArray />
        </Grid>
    );
};

export default CheckPointSection;
