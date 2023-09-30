import React from "react";
import { Container, Grid, useTheme, Divider } from "@mui/material";
import Heading from "../../common/text/Heading";
import GeneralSection from "./sub-components/GeneralSection";
import CheckPointSection from "./sub-components/CheckpointsSection";
import Button from "../../common/button/Button";
import { useFormContext } from "react-hook-form";
import { enqueueSnackbar } from "notistack";

const RouteInformationSection: React.FC = () => {
    const { breakpoints } = useTheme();
    const { handleSubmit } = useFormContext();

    return (
        <Container sx={{ my: "2rem" }} maxWidth="xl">
            <Heading>Route Information</Heading>
            <Grid container direction="column" mt="2rem" px="2vw" gap="2rem">
                <Grid item>
                    <Heading variant="h3">General</Heading>
                    <Grid
                        container
                        direction={breakpoints.down("md") ? "column" : "row"}
                        mx="2vw"
                        py="1.5rem"
                        rowSpacing={2}
                    >
                        <GeneralSection />
                    </Grid>
                </Grid>
                <Grid item>
                    <Heading variant="h3">Checkpoints</Heading>
                    <CheckPointSection />
                </Grid>
            </Grid>
            <Divider sx={{ mt: "2rem", mb: "1rem" }} light />
            <Grid container direction="row-reverse">
                <Button
                    variant="contained"
                    onClick={handleSubmit(
                        (data) => {
                            console.log(data);
                        },
                        () =>
                            enqueueSnackbar(
                                "The submission is unsuccessful! Please check your input",
                                { variant: "error" }
                            )
                    )}
                >
                    Calculate Route ETA
                </Button>
            </Grid>
        </Container>
    );
};

export default RouteInformationSection;
