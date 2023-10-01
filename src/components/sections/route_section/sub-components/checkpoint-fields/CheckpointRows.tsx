import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/RemoveCircleOutline";
import DragHandle from "@mui/icons-material/DragHandle";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";
import PortSelectField from "../../../../common/form/PortSelectField";
import { Grid } from "@mui/material";

interface CheckpointRowsType {
    id: string;
    index: number;
    removeFn: () => void;
}

const CheckpointRows: React.FC<CheckpointRowsType> = ({
    id,
    index,
    removeFn,
}) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id });

    return (
        <Grid
            {...attributes}
            component="div"
            ref={setNodeRef}
            container
            direction="row"
            alignItems="center"
            sx={{
                columnGap: { xs: "0.5rem", sm: "1rem" },
                transform: CSS.Transform.toString(transform),
                transition,
            }}
        >
            <Grid item>
                <IconButton onClick={removeFn}>
                    <RemoveIcon />
                </IconButton>
            </Grid>

            <Grid item lg={4} md={5} sm={6} xs={8}>
                <PortSelectField
                    label={`Checkpoint Port ${index + 1}`}
                    name={`checkpoints.${index}`}
                />
            </Grid>

            <Grid
                item
                component="div"
                style={{ cursor: isDragging ? "grabbing" : "grab" }}
                {...listeners}
            >
                <DragHandle />
            </Grid>
        </Grid>
    );
};

export default CheckpointRows;
