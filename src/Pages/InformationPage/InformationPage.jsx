import React from "react";
import { MainContainer } from "../../Components/MainContainer/MainContainer";
import styles from "./InformationPage.module.css"
import { Form } from "../../Components/Form/Form";
import { ImageInput } from "../../Components/ImageInput/ImageInput"
import { useForm } from "react-hook-form";
import { TextInput } from "../../Components/TextInput/TextInput";
import { CurrencyInput } from "../../Components/CurrencyInput/CurrencyInput";
import { GenderInput } from "../../Components/GenderInput/GenderInput";
import { MainButton } from "../../Components/MainButton/MainButton";

    const InformationPage = () => {
        const { register, handleSubmit, errors } = useForm({
            mode: "onBlur"
        })

        const onSubmit = (state) => {
            console.log(state)
        }


        return(
            <MainContainer>
                <div className = {styles.title}>
                    <h2>1 Основная информация.</h2>
                </div>
                <Form onSubmit = {handleSubmit(onSubmit)}>
                    <ImageInput ref={register('foto')} id="foto" />
                    <TextInput label="Имя" ref={register('firstName')}  id="firstName" type="text" name = "Имя"/>
                    <TextInput label="Фамилия" ref={register('family')}  id="family" type="text" name = "Фамилия"/>
                    <TextInput label="Отчество" ref={register('lastName')}  id="lastName" type="text" name = "Отчество"/>
                    <TextInput label="Город проживания" ref={register('city')}  id="city'" type="text" name = "Город проживания"/>
                    <GenderInput id="outlined-select-currency" select label="Пол" ref={register('sex')} name = "Пол"/>
                    <TextInput label="Дата рождения" ref={register('dateofBirth')}  id="dateofBirth" type="text" name = "Дата рождения"/>
                    <TextInput label="Гражданство" ref={register('cityzenship')}  id="cityzenship" type="text" name = "Гражданство"/>
                    <TextInput label="Желаемая должность" ref={register('vocation')}  id="vocation" type="text" name = "Желаемая должность"/>
                    <TextInput label="Зарплата" ref={register('salary')}  id="salary" type="text" name = "Зарплата"/>
                    <CurrencyInput id="outlined-select-currency" select label="Выбор" ref={register('name')} name = "Валюта"/>
                    <TextInput label="О себе" ref={register('aboutMyself')}  id="aboutMyself" type="text" name = "О себе"/>
                    <MainButton>Далее</MainButton>
                </Form>
            </MainContainer>
        )
    }

    export default InformationPage;