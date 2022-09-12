import React, { useState } from "react";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            "& > *": {
                margin: theme.spacing(1),
            },
            "& .MuiToggleButton-root": {
                border: "1px solid #479EFF",
                fontSize: "11px",
            },
            "& .MuiToggleButton-root.Mui-selected": {
                background: "#479EFF",
                fontWeight: "600",
                color: "#fff !important",
            },
        },
    })
);

export const ButtonsGroup = (props) => {
    const classes = useStyles();
    const [selected, setSelected] = useState(props.default);

    const handleSelection = (e, newValue) => {
        if (newValue !== null) {
            if (props.onClick) props.onClick(newValue);
            setSelected(newValue);
        }
    };

    return (
        <div
            className={classes.root}
            style={{ display: 'flex', padding: '0 1rem' }}
        >
            <ToggleButtonGroup
                value={selected}
                exclusive
                style={{ marginLeft: 0, marginRight: 0 }}
                onChange={handleSelection}
                size={props.size ? props.size : "medium"}
            >
                {props.items?.map((i) => (
                    <ToggleButton
                        disableRipple={true}
                        style={{ color: "#000" }}
                        value={i.value}
                    >
                        {i.label}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        </div>
    );
};