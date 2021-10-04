import React, { forwardRef } from "react";
import { TextField } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
    {
        value: 'RUB',
        label: '₽'
    }
  ];




    export const CurrencyInput = forwardRef((props, ref) => {

        const [currency, setCurrency] = React.useState('EUR');

        const handleChange = (event) => {
            setCurrency(event.target.value);
        };
    
        return(
            <TextField
            value={currency}
            onChange={handleChange}
            helperText="Пожалуйста выберите валюту"
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