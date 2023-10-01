import React from "react";
import {
    Box,
    Chip,
    Divider,
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
import shiptypes from "../../../constants/shiptypes";
import { useQuery } from "@tanstack/react-query";
import { getShips } from "../../../api/api";

interface ShipSelectFieldProps extends FormControlProps {
    name: string;
    label: string;
}

const ShipSelectField: React.FC<ShipSelectFieldProps> = ({
    name,
    label,
    ...props
}) => {
    const { control } = useFormContext();
    const { data: ships } = useQuery({
        queryKey: ["ships"],
        queryFn: getShips,
    });

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
                    <Select
                        label={label}
                        {...field}
                        renderValue={(val) =>
                            ships?.find((ship) => ship.imo === val)?.ship_name || ""
                        }
                    >
                        <MenuItem>
                            <em>Select Ship</em>
                        </MenuItem>
                        <Divider light />
                        {ships &&
                            ships.map(
                                ({
                                    imo,
                                    ship_type,
                                    dim_a,
                                    dim_b,
                                    ship_name,
                                }) => (
                                    <MenuItem key={imo} value={imo}>
                                        <Box width="100%">
                                            <Grid
                                                container
                                                direction="column"
                                                gap={0.5}
                                            >
                                                <Grid
                                                    container
                                                    direction="row"
                                                    justifyContent="space-between"
                                                >
                                                    <Chip
                                                        color="primary"
                                                        label={
                                                            <Typography variant="subtitle2">
                                                                {
                                                                    shiptypes[
                                                                        ship_type
                                                                    ]
                                                                }
                                                            </Typography>
                                                        }
                                                    />
                                                    <Chip
                                                        color="primary"
                                                        label={
                                                            <Typography variant="subtitle2">
                                                                {`imo: ${imo}`}
                                                            </Typography>
                                                        }
                                                    />
                                                </Grid>
                                                <Typography
                                                    variant="body2"
                                                    fontWeight="bold"
                                                >
                                                    {ship_name}
                                                </Typography>
                                                <Typography
                                                    variant="subtitle2"
                                                    color="rgba(0,0,0, 0.6)"
                                                >
                                                    {`Dimension; ${dim_a} x ${dim_b}`}
                                                </Typography>
                                            </Grid>
                                            <Divider light />
                                        </Box>
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
