import React, { Children, useState } from "react";
import { MainContainer } from "../../Components/MainContainer/MainContainer";
import style from "./ExperiencePage.module.css";
import { useForm } from "react-hook-form";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import { Form } from "../../Components/Form/Form";
import { useHistory } from "react-router";
import { TextField } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import { Button } from "@material-ui/core";
import Expirience from "../../Components/Experience/Experience";
import { MainButton } from "../../Components/MainButton/MainButton";



    const ExperiencePage = () => {

        const history = useHistory();

        const {  register, handleSubmit, formState: { errors }, watch } = useForm({
            mode: "onBlur"
    });

            const hasExperience = watch("hasExperience");

            const workOn = watch("workOn");

            const [state, setState] = useState([]);

            const addExpirience = event => {
                console.log(1)
                setState(state.concat(<Expirience key={state.length} />));
            };

            const onSubmit = (data) => {
                history.push("/education");
            }



        return(
            <MainContainer>
                <div className = {style.title}>
                    <h2>2 Опыт работы.</h2>
                </div>
                <Form onSubmit = {handleSubmit(onSubmit)} {...Children}>
                        <FormLabel component="legend">Есть ли у вас опыт работы?</FormLabel>
                            <RadioGroup
                                defaultValue="Нет"
                                name="hasExperience"
                            >
                                <FormControlLabel value="Да" control={<Radio />}  label="Да" {...register("hasExperience")}/>
                                <FormControlLabel value="Нет" control={<Radio />} label="Нет"  {...register("noExperience")}/>
                            </RadioGroup>
                    {hasExperience && (
                        <div>
                            <label>Начало работы</label>
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
                            {state}
                            <div className={style.expirienceButton}>
                            <Button   variant="contained" color="success" onClick={addExpirience}>Дополнительный опыт</Button>
                            </div>
                        </div>
                    )}
                    <div className={style.mainButton}>
                        <MainButton>Далее</MainButton>
                    </div>
                </Form>
            </MainContainer>
        )
    }

    export default ExperiencePage;