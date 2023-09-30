import React from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { Controller, useFormContext } from "react-hook-form";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { Typography } from "@mui/material";

interface DatePickerFieldProps {
    name: string;
    label: string;
}

const DatePickerField: React.FC<DatePickerFieldProps> = ({ name, label }) => {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            rules={{ required: true }}
            render={({ field, fieldState: { error } }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer
                        sx={{ pt: "none" }}
                        components={["DatePicker", "DatePicker"]}
                    >
                        <DatePicker
                            defaultValue={dayjs}
                            label={
                                <Typography variant="subtitle1">
                                    {label}
                                </Typography>
                            }
                            {...field}
                            slotProps={{
                                textField: {
                                    variant: "filled",
                                    fullWidth: true,
                                    error: !!error,
                                    helperText: error ? error?.message : "",
                                },
                            }}
                        />
                    </DemoContainer>
                </LocalizationProvider>
            )}
        />
    );
};

export default DatePickerField;
