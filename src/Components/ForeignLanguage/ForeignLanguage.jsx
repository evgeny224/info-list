import React from "react";
import { TextField } from "@material-ui/core"
import { MenuItem } from "@material-ui/core";
import { useForm } from "react-hook-form";



const languageLevel = [
    {
    value: 'Beginner (A1)',
    label: 'Beginner (A1)',
    },
    {
    value: 'Elementary (A2)',
    label: 'Elementary (A2)',
    },
    {
    value: 'Intermediate (B1)',
    label: 'Intermediate (B1)',
    },
    {
    value: 'Upper Intermediate (B2)',
    label: 'Upper Intermediate (B2)',
    },
    {
        value: 'Advanced (C1)',
        label: 'Advanced (C1)',
    },
    {
        value: 'Proficiency (C2)',
        label: 'Proficiency (C2)',
    },
];



const Language = () => {

    const { register, formState: { errors } } = useForm({
        mode: "onBlur"
    })


    const [levelLanguage, setlevelLanguage] = React.useState('Beginner (A1)');

    const handleChangeLanguage = (event) => {
        setlevelLanguage(event.target.value);
    };


    return(
        <div>
            <TextField label="Иностранный язык" fullWidth variant="outlined" margin="normal" {...register("foreignLanguage", { required: "Это поле необходимо заполнить"})} id="foreignLanguage"/>
                        {errors.nativeLanguage && <p>{errors.nativeLanguage.message}</p>}
            <TextField value={levelLanguage} {...register("levelLanguage", { required: "Это поле необходимо заполнить" })}  label="Уровень владения языком" id="levelLanguage"
                select onChange={handleChangeLanguage}  variant="outlined" margin="normal"   sx={{ width: 250 }}>
                {languageLevel.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>))}
            </TextField>
        </div>
    )
}


export default Language;