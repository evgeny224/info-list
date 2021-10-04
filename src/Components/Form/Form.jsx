import React from "react";
import styles from "./Form.module.css";


    export const Form = ({ children, ...props}) => {
        return(
            <form {...props} className={styles.form}>
                {children}
            </form>
        )
    }