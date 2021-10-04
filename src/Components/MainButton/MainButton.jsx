import React from "react";
import { Button } from "@material-ui/core";


    export const MainButton = ({children, props}) => {
        return(
            <Button type="submit"  margin="normal" fullWidth variant="contained" color="primary" {...props}>{children}</Button>
        )
    }