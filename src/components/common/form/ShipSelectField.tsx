import React from "react";
import {
    Box,
    Chip,
    FormControl,
    FormControlProps,
    FormHelperText,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Typography,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { ShipType } from "../../../types/ship";
import shiptypes from "../../../constants/shiptypes";

interface ShipSelectFieldProps extends FormControlProps {
    options: ShipType[];
    name: string;
    label: string;
}

const ShipSelectField: React.FC<ShipSelectFieldProps> = ({
    options,
    name,
    label,
    ...props
}) => {
    const { control } = useFormContext();

    return (
        <Controller
            rules={{ required: true }}
            control={control}
            name={name}
            render={({ field, fieldState: { error } }) => (
                <FormControl
                    {...props}
                    fullWidth
                    variant="filled"
                    error={Boolean(error)}
                >
                    <InputLabel>
                        <Typography variant="subtitle1">{label}</Typography>
                    </InputLabel>
                    <Select label={label} {...field}>
                        {options.map(
                            ({ imo, ship_type, dim_a, dim_b, name }) => (
                                <MenuItem key={imo} value={imo}>
                                    {imo === -1 ? (
                                        <em>Select Ship</em>
                                    ) : (
                                        <Box>
                                            <Grid container>
                                                <Grid
                                                    container
                                                    direction="row"
                                                    justifyContent="space-between"
                                                >
                                                    <Chip
                                                        color="primary"
                                                        label={
                                                            shiptypes[ship_type]
                                                        }
                                                    />
                                                    <Chip
                                                        color="primary"
                                                        label={imo}
                                                    />
                                                </Grid>
                                                <Typography
                                                    variant="body1"
                                                    fontWeight="bold"
                                                >
                                                    {name}
                                                </Typography>
                                                <Typography
                                                    variant="subtitle1"
                                                    color="rgba(0,0,0, 0.6)"
                                                >
                                                    {`${dim_a} x ${dim_b}`}
                                                </Typography>
                                            </Grid>
                                        </Box>
                                    )}
                                </MenuItem>
                            )
                        )}
                    </Select>
                    {error && error.message && (
                        <FormHelperText>{error.message}</FormHelperText>
                    )}
                </FormControl>
            )}
        />
    );
};

export default ShipSelectField;
