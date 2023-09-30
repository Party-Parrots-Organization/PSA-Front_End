import React from "react";
import PortImg from "../../../assets/image/Port.png";
import { Grid, Typography } from "@mui/material";

const Banner: React.FC = () => {
    return (
        <Grid
            container
            direction="row"
            sx={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${PortImg})`,
                height: { xs: "45vh", sm: "50vh", md: "55vh", lg: "60vh" },
                width: "100%",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Typography variant="h1" color="white">
                Ship Arrival Estimator
            </Typography>
        </Grid>
    );
};

export default Banner;
