import React from "react";
import {
    FormControl,
    FormControlProps,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
    Typography,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { getPorts } from "../../../api/api";

interface PortSelectFieldProps extends FormControlProps {
    name: string;
    label: string;
}

const PortSelectField: React.FC<PortSelectFieldProps> = ({
    name,
    label,
    ...props
}) => {
    const { control } = useFormContext();
    const { data: ports } = useQuery({
        queryKey: ["ports"],
        queryFn: getPorts,
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
                    <Select label={label} {...field}>
                        <MenuItem value="">
                            <em>Please select {label}</em>
                        </MenuItem>
                        {ports &&
                            ports.map(({ port_name, port_code }) => (
                                <MenuItem key={port_code} value={port_name}>
                                    <Typography>
                                        {`(${port_code}) ${port_name}`}
                                    </Typography>
                                </MenuItem>
                            ))}
                    </Select>
                    {error && error.message && (
                        <FormHelperText>{error.message}</FormHelperText>
                    )}
                </FormControl>
            )}
        />
    );
};

export default PortSelectField;
