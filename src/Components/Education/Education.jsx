import React from "react";
import { TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";

const Education = () => {

    const { register, formState: { errors } } = useForm({
        mode: "onBlur"
    })


    return(
        <div>
            <label>Место обучения.</label>
                    <TextField label="Название учебного заведения" fullWidth variant="outlined" margin="normal" {...register("studyPlace", { required: "Это поле необходимо заполнить"})} id="studyPlace"/>
                    {errors.studyPlace && <p>{errors.studyPlace.message}</p>}
                    <TextField label="Факультет" fullWidth variant="outlined" margin="normal" {...register("faculty", { required: "Это поле необходимо заполнить"})} id="faculty"/>
                    {errors.faculty && <p>{errors.faculty.message}</p>}
                    <TextField label="Специализация" fullWidth variant="outlined" margin="normal" {...register("speciality", { required: "Это поле необходимо заполнить"})} id="speciality"/>
                    {errors.speciality && <p>{errors.speciality.message}</p>}
                    <TextField label="Год окончания" fullWidth variant="outlined" margin="normal" {...register("graduationYear", { required: "Это поле необходимо заполнить"})} id="graduationYear"/>
                    {errors.graduationYear && <p>{errors.graduationYear.message}</p>}
        </div>
    )
}


export default Education