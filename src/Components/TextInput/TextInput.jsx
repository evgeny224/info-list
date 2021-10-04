import React, { forwardRef } from "react";
import { TextField } from "@material-ui/core";



    export const TextInput = forwardRef((props, ref) =>{
        return (<TextField variant="outlined" margin="normal" inputRef={ref} fullWidth {...props}/>);
    });