import React from "react";
import { PortType } from "../../../types/port";
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

const ports:PortType[] = []

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
                        {ports.map(({ name, port_code }) => (
                            <MenuItem key={port_code} value={port_code}>
                                {name === "" ? <em>{name}</em> : name}
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
