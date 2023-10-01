import React from "react";
import JourneyStepper from "../../common/stepper/JourneyStepper";
import { Container } from "@mui/material";

const EstimationSection: React.FC = ({}) => {
    return (
        <Container sx={{my:"3rem"}} maxWidth="md">
            <JourneyStepper />
        </Container>
    );
};

export default EstimationSection;
