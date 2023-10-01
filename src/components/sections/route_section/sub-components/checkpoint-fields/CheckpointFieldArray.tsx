import { useFieldArray } from "react-hook-form";
import CheckpointRows from "./CheckpointRows";
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import {
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Grid } from "@mui/material";
import Button from "../../../../common/button/Button";
import AddIcon from "@mui/icons-material/Add";

const CheckPointFieldArray = () => {
    const { fields, append, remove, move } = useFieldArray({
        name: "checkpoints",
    });
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    return (
        <>
            <DndContext
                onDragEnd={(event) => {
                    const { active, over } = event;
                    if (over && active.id !== over.id) {
                        const oldIndex = fields.findIndex(
                            (field) => field.id === active.id
                        );
                        const newIndex = fields.findIndex(
                            (field) => field.id === over.id
                        );

                        move(oldIndex, newIndex);
                    }
                }}
                sensors={sensors}
                collisionDetection={closestCenter}
            >
                <SortableContext
                    strategy={verticalListSortingStrategy}
                    items={fields.map((field) => field.id)}
                >
                    <Grid component="div" display="flex" direction="column" gap={2}>
                        {fields.map((field, index) => (
                            <CheckpointRows
                                key={field.id}
                                id={field.id}
                                index={index}
                                removeFn={() => {
                                    remove(
                                        fields.findIndex(
                                            ({ id }) => id === field.id
                                        )
                                    );
                                }}
                            />
                        ))}
                    </Grid>
                </SortableContext>
            </DndContext>
            <Grid item>
                <Button
                    variant="contained"
                    color="primary"
                    endIcon={<AddIcon />}
                    onClick={() => append("")}
                >
                    Add Checkpoints
                </Button>
            </Grid>
        </>
    );
};

export default CheckPointFieldArray;
