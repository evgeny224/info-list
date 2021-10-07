import React, { useState } from "react";
import { MainContainer } from "../../Components/MainContainer/MainContainer";
import { Form } from "../../Components/Form/Form";
import style from "./EducationPage.module.css";
import { TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { MenuItem } from "@material-ui/core";
import { useHistory } from "react-router";
import Button from '@material-ui/core/Button';
import Language from "../../Components/ForeignLanguage/ForeignLanguage";
import Education from "../../Components/Education/Education";
import { MainButton } from "../../Components/MainButton/MainButton";

const education = [
    {
    value: 'Среднее',
    label: 'Среднее',
    },
    {
    value: 'Высшее',
    label: 'Высшее',
    },
    {
    value: 'Среднеспециальное',
    label: 'Среднеспециальное',
    },
    {
    value: 'Незаконченное высшее',
    label: 'Незаконченное высшее',
    },
];

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




    const EducationPage = () => {

        const history = useHistory();


        const { register, handleSubmit, formState: { errors } } = useForm({
            mode: "onBlur"
        })

        const [educatuion, setEducatuion] = React.useState('Среднее');

        const handleChange = (event) => {
            setEducatuion(event.target.value);
        };

        const [levelLanguage, setlevelLanguage] = React.useState('Beginner (A1)');

        const handleChangeLanguage = (event) => {
            setlevelLanguage(event.target.value);
        };

        const [langstate, setLangState] = useState([]);

        const addLanguage = event => {
            setLangState(langstate.concat(<Language key={langstate.length} />));
        }

        const [educationstate, setEducationState] = useState([]);

        const addEducation = event => {
            setEducationState(educationstate.concat(<Education key={educationstate.length} />));
        }






        return(
            <MainContainer>
                <Form>
                    <div className = {style.title}>
                        <h2>3 Образование.</h2>
                    </div>
                    <TextField value={educatuion} {...register("education", { required: "Это поле необходимо заполнить" })}  label="Образование" id="education"
                            select onChange={handleChange} helperText="Выберите ваш уровень образования" variant="outlined" margin="normal" sx={{ width: 250 }}>
                            {education.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>))}
                    </TextField>
                    {errors.educatuion && <p>{errors.educatuion.message}</p>}
                    <TextField label="Родной язык" fullWidth variant="outlined" margin="normal" {...register("nativeLanguage", { required: "Это поле необходимо заполнить"})} id="nativeLanguage"/>
                    {errors.nativeLanguage && <p>{errors.nativeLanguage.message}</p>}
                    <TextField label="Иностранный язык" fullWidth variant="outlined" margin="normal" {...register("foreignLanguage", { required: "Это поле необходимо заполнить"})} id="foreignLanguage"/>
                    {errors.nativeLanguage && <p>{errors.nativeLanguage.message}</p>}
                    <TextField value={levelLanguage} {...register("levelLanguage", { required: "Это поле необходимо заполнить" })}  label="Уровень владения языком" id="levelLanguage"
                            select onChange={handleChangeLanguage}  variant="outlined" margin="normal"   sx={{ width: 250 }}>
                            {languageLevel.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>))}
                    </TextField>
                    {langstate}
                    <div className={style.addButton}>
                        <Button   variant="contained" color="success" onClick={addLanguage}>Добавить иностранный язык</Button>
                    </div>
                    <label>Место обучения.</label>
                    <TextField label="Название учебного заведения" fullWidth variant="outlined" margin="normal" {...register("studyPlace", { required: "Это поле необходимо заполнить"})} id="studyPlace"/>
                    {errors.studyPlace && <p>{errors.studyPlace.message}</p>}
                    <TextField label="Факультет" fullWidth variant="outlined" margin="normal" {...register("faculty", { required: "Это поле необходимо заполнить"})} id="faculty"/>
                    {errors.faculty && <p>{errors.faculty.message}</p>}
                    <TextField label="Специализация" fullWidth variant="outlined" margin="normal" {...register("speciality", { required: "Это поле необходимо заполнить"})} id="speciality"/>
                    {errors.speciality && <p>{errors.speciality.message}</p>}
                    <TextField label="Год окончания" fullWidth variant="outlined" margin="normal" {...register("graduationYear", { required: "Это поле необходимо заполнить"})} id="graduationYear"/>
                    {errors.graduationYear && <p>{errors.graduationYear.message}</p>}
                    {educationstate}
                    <div className={style.addButton}>
                        <Button   variant="contained" color="success" onClick={addEducation}>Добавить образование</Button>
                    </div>
                    <div className={style.mainButton}>
                        <MainButton>Далее</MainButton>
                    </div>
                </Form>
            </MainContainer>
        )
    }

    export default EducationPage;