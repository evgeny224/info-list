import React, { useState } from "react";
import { useForm } from "react-hook-form";
import style from "./UserInfoInput.module.css";
import Button from '@material-ui/core/Button';
import UserInfoOutputContainer from "../UserInfoOutput/UserInfoOutputContainer";
import { styled } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { infoReducerAC } from "../../Redux/info-reducer";


const Input = styled('input')({
    display: 'none',
});



    export default function UserInfoInput (props){
        console.log(props)
    
        const { register, handleSubmit, watch, formState: { errors } } = useForm();
        
        // const onSubmit = data => console.log(data)


        const onSubmit = (data) => {
            console.log(data)
            props.addUserInfo(data);
        }



        const [state, setState] = useState([]);

        const [langstate, setLangState] = useState([]);

        const addExpirience = event => {
            setState(state.concat(<Expirience key={state.length} />));
        };

        const addLanguage = event => {
            setLangState(langstate.concat(<Language key={state.length} />));
        }

        const Expirience = () => {
            return (
                <div>
                    <div>
                        <label>Укажите время начала работы</label>
                        <input placeholder="Месяц/Год" type="text" id="startJob" {...register("startJob", {required: "Это поле необходимо заполнить"})}/>
                        {errors.startJob && <p>{errors.startJob.message}</p>}
                    </div>
                    <div>
                    <div>
                        <label>Работаю по настоящее время</label>
                        <input type="checkbox"  name="" value="Yes" {...register("working")} />
                    </div>
                    </div>
                    <div>
                        <label>Укажите время окончания работы</label>
                        <input placeholder="Месяц/Год" type="text" id="finishJob" {...register("finishJob", {required: "Это поле необходимо заполнить"})}/>
                        {errors.finishJob && <p>{errors.finishJob.message}</p>}
                    </div>
                    <div>
                        <label>Название компании</label>
                        <input  type="text" id="companyName" {...register("companyName", {required: "Это поле необходимо заполнить"})}/>
                        {errors.companyName && <p>{errors.companyName.message}</p>}
                    </div>
                    <div>
                        <label>Должность</label>
                        <input  type="text" id="position" {...register("position", {required: "Это поле необходимо заполнить"})}/>
                        {errors.position && <p>{errors.position.message}</p>}
                    </div>
                    <div>
                        <label>Обязанности</label>
                        <input  type="text" id="responsibilities" {...register("responsibilities")}/>
                        {errors.responsibilities && <p>{errors.responsibilities.message}</p>}
                    </div>
                </div>
            );
        };

        const Language = () => {
            return(
                <div>
                    <div>
                        <label>Иностранный язык</label>
                        <input type="text" id="foreignLanguage" {...register("foreignLanguage", {required: "Это поле необходимо заполнить"})}/>
                        {errors.foreignLanguage && <p>{errors.foreignLanguage.message}</p>}
                    </div>
                    <div>
                        <label>Уровень языка</label>
                        <select {...register("languageLevel")}>
                            <option value="Beginner (A1)">Beginner (A1)</option>
                            <option value="Elementary (A2)">Elementary (A2)</option>
                            <option value="Intermediate (B1)">Intermediate (B1)</option>
                            <option value="Upper Intermediate (B2)">Upper Intermediate (B2)</option>
                            <option value="Advanced (C1)">Advanced (C1)</option>
                            <option value="Proficiency (C2)">Proficiency (C2)</option>
                        </select>
                    </div>
                </div>
            )
        }


        return(
            <form onSubmit={handleSubmit(onSubmit)} className = {style.form}>
                <h2>Основная информация.</h2>
                <label htmlFor="contained-button-file">
                    <Input accept="image/*" id="contained-button-file" {...register("foto")}  multiple type="file" />
                    <Button variant="contained" component="span">
                    Загрузить Фото
                    </Button>
                </label>
                <div>
                    <label>Имя:</label>
                    <input type="text" id="firstName" {...register("firstName", {required: "Это поле необходимо заполнить"})}/>
                    {errors.firstName && <p>{errors.firstName.message}</p>}
                </div>
                <div>
                    <label>Фамилия:</label>
                    <input type="text" id="family" {...register("family", {required: "Это поле необходимо заполнить"})}/>
                    {errors.family && <p>{errors.family.message}</p>}
                </div>
                <div>
                    <label>Отчество:</label>
                    <input type="text" id="lastName" {...register("lastName", {required: "Это поле необходимо заполнить"})}/>
                    {errors.lastName && <p>{errors.lastName.message}</p>}
                </div>
                <div>
                    <label>Город проживания:</label>
                    <input type="text" id="city" {...register("city", {required: "Это поле необходимо заполнить"})}/>
                    {errors.city && <p>{errors.city.message}</p>}
                </div>
                <div>
                    <label>Дата рождения:</label>
                    <input type="text" id="birthday" {...register("birthday", {required: "Это поле необходимо заполнить"})}/>
                    {errors.birthday && <p>{errors.birthday.message}</p>}
                </div>
                <div>
                    <label>Пол:</label>
                    <select {...register("gender")}>
                        <option value="Жен">Жен</option>
                        <option value="Муж">Муж</option>
                    </select>
                </div>
                <div>
                    <label> Гражданство:</label>
                    <input type="text" id="citizenship" {...register("citizenship", {required: "Это поле необходимо заполнить"})}/>
                    {errors.citizenship && <p>{errors.citizenship.message}</p>}
                </div>
                <div>
                    <label> Желаемая должность:</label>
                    <input type="text" id="vocation" {...register("vocation", {required: "Это поле необходимо заполнить"})}/>
                    {errors.vocation && <p>{errors.vocation.message}</p>}
                </div>
                <div>
                    <label> Желаемая заработная плата:</label>
                    <input type="text" name="salary" {...register("salary", {required: "Это поле необходимо заполнить"})}/>
                    {errors.salary && <p>{errors.salary.message}</p>}
                    <select {...register("currency")}>
                        <option value="RUB">RUB</option>
                        <option value="USD">USD</option>
                    </select>
                </div>
                <div>
                    <label>О себе:</label>
                    <textarea type="text" id="personalInformation" {...register("personalInformation")} className = {style.textarea}/>
                </div>
                <h2>Опыт работы.</h2>
                <div>
                    <label>Есть</label>
                    <input type="radio" className = {style.inpt} name="experience" value="Yes" onClick={addExpirience} {...register("experience", { required: true })} />
                </div>
                <div>
                    <label>Нет</label>
                    <input type="radio" className = {style.inpt} name="experience" value="No"  {...register("experience", { required: true })} />
                </div>
                {state}
                <button onClick={addExpirience} className = {style.btw}>Добавить опыт</button>
                <h2>Образование.</h2>
                <div>
                    <label>Уровень образования</label>
                    <select {...register("education", {required: "Это поле необходимо заполнить"})}>
                        <option value="Среднее">Среднее</option>
                        <option value="Среднее специальное">Среднее специальное</option>
                        <option value="Высшее">Высшее</option>
                        <option value="Неоконченное высшее">Неоконченное высшее</option>
                    </select>
                    {errors.education && <p>{errors.education.message}</p>}
                </div>
                <div>
                    <label>Родной язык</label>
                    <input type="text" id="nativelanguage" {...register("nativelanguage", {required: "Это поле необходимо заполнить"})}/>
                    {errors.nativelanguage && <p>{errors.nativelanguage.message}</p>}
                </div>
                <div>
                    <label>Иностранный язык</label>
                    <input type="text" id="foreignLanguage" {...register("foreignLanguage", {required: "Это поле необходимо заполнить"})}/>
                    {errors.foreignLanguage && <p>{errors.foreignLanguage.message}</p>}
                </div>
                <div>
                    <label>Уровень языка</label>
                    <select {...register("languageLevel")}>
                        <option value="Beginner (A1)">Beginner (A1)</option>
                        <option value="Elementary (A2)">Elementary (A2)</option>
                        <option value="Intermediate (B1)">Intermediate (B1)</option>
                        <option value="Upper Intermediate (B2)">Upper Intermediate (B2)</option>
                        <option value="Advanced (C1)">Advanced (C1)</option>
                        <option value="Proficiency (C2)">Proficiency (C2)</option>
                    </select>
                </div>
                {langstate}
                <button className = {style.btw} onClick={addLanguage}>Добавить язык</button>

                <div>
                    <label>Место учебы</label>
                    <input type="text" id="studyPlace" {...register("studyPlace", {required: "Это поле необходимо заполнить"})}/>
                    {errors.studyPlace && <p>{errors.studyPlace.message}</p>}
                </div>
                <div>
                    <label>Факультет</label>
                    <input type="text" id="faculty" {...register("faculty", {required: "Это поле необходимо заполнить"})}/>
                    {errors.faculty && <p>{errors.faculty.message}</p>}
                </div>
                <div>
                    <label>Специализация</label>
                    <input type="text" id="speciality" {...register("speciality", {required: "Это поле необходимо заполнить"})}/>
                    {errors.speciality && <p>{errors.speciality.message}</p>}
                </div>
                <div>
                    <label>Год окончания</label>
                    <input type="text" id="graduation" {...register("graduation", {required: "Это поле необходимо заполнить"})}/>
                    {errors.graduation && <p>{errors.graduation.message}</p>}
                </div>
                <input type="submit" value ="Отправить"/>
            </form>
        )
    }



    connect(({ firstName, lastName }) => ({ firstName, lastName }), infoReducerAC)(UserInfoInput);