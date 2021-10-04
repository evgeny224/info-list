import React, { forwardRef } from "react";
import Button from '@material-ui/core/Button';
import { styled } from "@material-ui/core/styles";
import styles from "./ImageInput.module.css"

const Input = styled('input')({
    display: 'none',
});


    export const ImageInput = forwardRef((props, ref) => {
        return(
            <label htmlFor="contained-button-file" inputRef = {ref} {...props} className={styles.image}>
                <Input accept="image/*" id="contained-button-file"   multiple type="file" />
                <Button variant="contained" component="span">
                    Загрузить Фото
                </Button>
            </label>
        )
    })