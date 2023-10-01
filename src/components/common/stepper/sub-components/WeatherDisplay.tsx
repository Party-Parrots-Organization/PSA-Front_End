import React from "react";
import { Weather } from "../../../../types/form";
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";
import AirIcon from "@mui/icons-material/Air";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import DeviceThermostatOutlinedIcon from "@mui/icons-material/DeviceThermostatOutlined";
import ThunderstormOutlinedIcon from "@mui/icons-material/ThunderstormOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";

interface WeatherDisplayProps {
    weather: Weather;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({
    weather: {
        cloudCoverAvg,
        dewPointAvg,
        humidityAvg,
        rainIntensityAvg,
        temperatureAvg,
        visibilityAvg,
        windDirectionAvg,
        windSpeedAvg,
    },
}) => {
    return (
        <List>
            {/* Wind speed and direction */}
            <ListItem disablePadding>
                <ListItemIcon>
                    <AirIcon />
                </ListItemIcon>
                <ListItemText
                    primary={
                        <Typography variant="subtitle1">
                            Wind Speed and Direction
                        </Typography>
                    }
                    secondary={
                        <Typography variant="body1" fontWeight="bold">
                            {`${windSpeedAvg} mph (${windDirectionAvg} °)`}
                        </Typography>
                    }
                />
            </ListItem>
            {/* Visibility */}
            <ListItem disablePadding>
                <ListItemIcon>
                    <RemoveRedEyeOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                    primary={
                        <Typography variant="subtitle1">Visibility</Typography>
                    }
                    secondary={
                        <Typography variant="body1" fontWeight="bold">
                            {`${visibilityAvg} mi`}
                        </Typography>
                    }
                />
            </ListItem>
            {/* Temperature and dewpoint */}
            <ListItem disablePadding>
                <ListItemIcon>
                    <DeviceThermostatOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                    primary={
                        <Typography variant="subtitle1">
                            Temperature / Dew Point
                        </Typography>
                    }
                    secondary={
                        <Typography variant="body1" fontWeight="bold">
                            {`${temperatureAvg} °F / ${dewPointAvg}°F`}
                        </Typography>
                    }
                />
            </ListItem>
            {/* Rainfall */}
            <ListItem disablePadding>
                <ListItemIcon>
                    <ThunderstormOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                    primary={
                        <Typography variant="subtitle1">Rainfall</Typography>
                    }
                    secondary={
                        <Typography variant="body1" fontWeight="bold">
                            {`${rainIntensityAvg} in/hr`}
                        </Typography>
                    }
                />
            </ListItem>
            {/* Cloud Cover */}
            <ListItem disablePadding>
                <ListItemIcon>
                    <CloudOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                    primary={
                        <Typography variant="subtitle1">Cloud Cover</Typography>
                    }
                    secondary={
                        <Typography variant="body1" fontWeight="bold">
                            {`${cloudCoverAvg}%`}
                        </Typography>
                    }
                />
            </ListItem>
            {/* Humidity */}
            <ListItem disablePadding>
                <ListItemIcon>
                    <WaterDropOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                    primary={
                        <Typography variant="subtitle1">Humidity</Typography>
                    }
                    secondary={
                        <Typography variant="body1" fontWeight="bold">
                            {`${humidityAvg}%`}
                        </Typography>
                    }
                />
            </ListItem>
        </List>
    );
};

export default WeatherDisplay;
