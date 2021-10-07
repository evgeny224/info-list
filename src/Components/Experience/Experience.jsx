import React from "react";
import { TextField } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import { useForm } from "react-hook-form";



    const Expirience = () => {

        const {  register, formState: { errors }, watch } = useForm({
            mode: "onBlur"
        });

        const workOn = watch("workOn");

        return(
                <div>
                    <label>Дополнительный опыт работы</label>
                    <TextField label="Месяц" fullWidth variant="outlined" margin="normal" {...register("monthStart", { required: "Это поле необходимо заполнить"})} id="monthStart"/>
                    {errors.monthStart && <p>{errors.monthStart.message}</p>}
                    <TextField label="Год" fullWidth variant="outlined" margin="normal" {...register("yearStart", { required: "Это поле необходимо заполнить"})} id="yearStart"/>
                    {errors.yearStart && <p>{errors.yearStart.message}</p>}
                    {!workOn &&
                    <div>
                    <label>Окончание работы</label>
                    <TextField label="Месяц" fullWidth variant="outlined" margin="normal" {...register("monthFinish", { required: "Это поле необходимо заполнить"})} id="monthFinish"/>
                    {errors.monthFinish && <p>{errors.monthFinish.message}</p>}
                    <TextField label="Год" fullWidth variant="outlined" margin="normal" {...register("yearFinish", { required: "Это поле необходимо заполнить"})} id="yearFinish"/>
                    {errors.yearFinish && <p>{errors.yearFinish.message}</p>}
                    </div>
                    }
                    <Checkbox  {...register("workOn")} id="workOn"/> Работаю по настоящее время.
                    <TextField label="Название компании" fullWidth variant="outlined" margin="normal" {...register("companyName", { required: "Это поле необходимо заполнить"})} id="companyName"/>
                    {errors.companyName && <p>{errors.companyName.message}</p>}
                    <TextField label="Должность" fullWidth variant="outlined" margin="normal" {...register("position", { required: "Это поле необходимо заполнить"})} id="position"/>
                    {errors.position && <p>{errors.position.message}</p>}
                    <TextField label="Обязанности" fullWidth variant="outlined" margin="normal" {...register("responsibilities")} id="responsibilities"/>
                </div>
        )
    }

    export default Expirience;