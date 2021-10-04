import React from "react";
import styles from "./MainContainer.module.css";



    export const MainContainer = ({ children, ...props }) => {
        return(
            <div {...props} className = {styles.container}>
                {children}
            </div>
        )
    }