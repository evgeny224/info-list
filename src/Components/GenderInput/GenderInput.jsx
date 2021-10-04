import React, { forwardRef } from "react";
import { TextField } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";

const currencies = [
    {
      value: 'Мужчина',
      label: 'Мужчина',
    },
    {
      value: 'Женщина',
      label: 'Женщина',
    },
  ];




    export const GenderInput = forwardRef((props, ref) => {

        const [currency, setCurrency] = React.useState('Мужчина');

        const handleChange = (event) => {
            setCurrency(event.target.value);
        };
    
        return(
            <TextField
            value={currency}
            onChange={handleChange}
            helperText="Пожалуйста выберите ваш пол"
            variant="outlined" margin="normal" inputRef={ref}  {...props}
            >
            {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
            {option.label}
            </MenuItem>
            ))}
            </TextField>
        )
    })