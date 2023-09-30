import React from "react";
import NavBar from "../components/common/navigations/NavBar";
import Banner from "../components/common/banner/Banner";
import { Grid } from "@mui/material";
import RouteInformationSection from "../components/sections/route_section/RouteInformationSection";
import { FormProvider, useForm } from "react-hook-form";

const Home: React.FC = () => {
    const formState = useForm();

    return (
        <FormProvider {...formState}>
            <NavBar />
            <Banner />
            <Grid container direction="column" columnGap="3rem">
                <Grid item>
                    <RouteInformationSection />
                </Grid>
                <Grid item></Grid>
            </Grid>
        </FormProvider>
    );
};

export default Home;
