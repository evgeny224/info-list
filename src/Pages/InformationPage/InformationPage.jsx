import React from "react";
import { MainContainer } from "../../Components/MainContainer/MainContainer";
import styles from "./InformationPage.module.css"
import { useHistory } from "react-router-dom";
import { Form } from "../../Components/Form/Form";
import { useForm } from "react-hook-form";
import { MainButton } from "../../Components/MainButton/MainButton";
import { TextField } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import { MenuItem } from "@material-ui/core";



const Input = styled('input')({
    display: 'none',
});


const genders = [
    {
      value: 'Мужчина',
      label: 'Мужчина',
    },
    {
      value: 'Женщина',
      label: 'Женщина',
    },
  ];

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




    const InformationPage = () => {

      const history = useHistory();


        const [gender, setGender] = React.useState('Мужчина');

        const handleChange = (event) => {
            setGender(event.target.value);
        };

        const [currency, setCurrency] = React.useState('EUR');

        const handleChangeCurrency = (event) => {
            setCurrency(event.target.value);
        };



        const { register, handleSubmit, formState: { errors } } = useForm({
            mode: "onBlur"
        })

        const onSubmit = (data) => {
            history.push("/experience");
        }


        return(
            <MainContainer>
                <div className = {styles.title}>
                    <h2>1 Основная информация.</h2>
                </div>
                <Form onSubmit = {handleSubmit(onSubmit)}>
                    <label htmlFor="contained-button-file"  className={styles.image}>
                        <Input accept="image/*" id="contained-button-file"   multiple type="file" />
                        <Button variant="contained" component="span">
                            Загрузить Фото
                        </Button>
                    </label>
                    <TextField label="Имя" fullWidth variant="outlined" margin="normal" {...register("firstName", { required: "Это поле необходимо заполнить"})} id="firstName"/>
                      {errors.firstName && <p>{errors.firstName.message}</p>}
                    <TextField label="Фамилия" fullWidth variant="outlined" margin="normal" {...register("family", { required: "Это поле необходимо заполнить" })} id="family"/>
                      {errors.family && <p>{errors.family.message}</p>} 
                    <TextField label="Отчество" fullWidth variant="outlined" margin="normal" {...register("lastName")} id="lastName"/>
                    <TextField label="Город проживания" fullWidth variant="outlined" margin="normal" {...register("city", { required: "Это поле необходимо заполнить" })} id="city"/>
                      {errors.city && <p>{errors.city.message}</p>} 
                    <TextField label="Дата рождения" fullWidth variant="outlined" margin="normal" {...register("dateofBirth", { required: "Это поле необходимо заполнить" })} id="city"/>
                      {errors.dateofBirth && <p>{errors.dateofBirth.message}</p>} 
                    <TextField value={gender} {...register("gender", { required: "Это поле необходимо заполнить" })}  label="Пол" id="gender"
                        select onChange={handleChange} helperText="Пожалуйста выберите ваш пол" variant="outlined" margin="normal" >
                        {genders.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>))}
                    </TextField>
                      {errors.gender && <p>{errors.gender.message}</p>} 
                    <TextField label="Гражданство" fullWidth variant="outlined" margin="normal" {...register("cityzenship", { required: "Это поле необходимо заполнить" })} id="cityzenship"/>
                      {errors.cityzenship && <p>{errors.cityzenship.message}</p>} 
                    <TextField label="Желаемая должность" fullWidth variant="outlined" margin="normal" {...register("vocation", { required: "Это поле необходимо заполнить" })} id="vocation"/>
                      {errors.vocation && <p>{errors.vocation.message}</p>} 
                    <TextField label="Зарплата" fullWidth variant="outlined" margin="normal" {...register("salary", { required: "Это поле необходимо заполнить" })} id="salary"/>
                      {errors.salary && <p>{errors.salary.message}</p>} 
                    <TextField value={currency} select onChange={handleChangeCurrency} {...register("currency")}  label="Валюта" id="currency"
                        helperText="Пожалуйста выберите валюту" variant="outlined" margin="normal">
                        {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>))}
                    </TextField>
                    <TextField label="О себе" fullWidth variant="outlined" margin="normal" {...register("aboutMyself")} id="aboutMyself"/>
                    <MainButton>Далее</MainButton>
                </Form>
            </MainContainer>
        )
    }
    export default InformationPage;
