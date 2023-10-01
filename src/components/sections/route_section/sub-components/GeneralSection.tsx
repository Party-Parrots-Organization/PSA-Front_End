import { Grid } from "@mui/material";
import React from "react";
import PortSelectField from "../../../common/form/PortSelectField";
import DatePickerField from "../../../common/form/DateTimePickerField";
import ShipSelectField from "../../../common/form/ShipSelectField";

const GeneralSection: React.FC = ({}) => {
    return (
        <>
            <Grid item>
                <Grid container rowSpacing={2} columnSpacing={5}>
                    <Grid item lg={4} md={5} sm={6} xs={12}>
                        <PortSelectField
                            name="origin_port"
                            label="Source Port"
                        />
                    </Grid>
                    <Grid item lg={4} md={5} sm={6} xs={12}>
                        <PortSelectField
                            name="destination_port"
                            label="Destination Port"
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
            <Grid container rowSpacing={2} columnSpacing={5}>
                    <Grid item lg={4} md={5} sm={6} xs={12}>
                        <ShipSelectField
                            name="ship"
                            label="Ship"
                            options={[]}
                        />
                    </Grid>
                    <Grid item lg={4} md={5} sm={6} xs={12}>
                        <DatePickerField
                            name="departure_date"
                            label="Departure Date"
                        />
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default GeneralSection;
