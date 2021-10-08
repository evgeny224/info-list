import React from "react";
import { MainContainer } from "../../Components/MainContainer/MainContainer";
import { useData } from "../../DataContext";
import style from "./ReviewPage.module.css";


    const ReviewPage = () => {

        const {  data } = useData();

        console.log(Array.from(data.foto))

        return(
            <MainContainer>
                <div>
                    <h2>3 Вывод данных.</h2>
                    <div className={style.info}>
                        <h3>1 Основная информация</h3>
                        <img src={data.foto.File} alt="foto"/>
                        <div >
                            Имя: {data.firstName}
                        </div>
                        <div>
                            Фамилия: {data.family}
                        </div>
                        <div>
                            Отчество: {data.lastName}
                        </div>
                        <div>
                            Город проживания: {data.city}
                        </div>
                        <div>
                            Дата рождения: {data.dateofBirth}
                        </div>
                        <div>
                            Пол: {data.gender}
                        </div>
                        <div>
                            Гражданство: {data.cityzenship}
                        </div>
                        <div>
                            Желаемая должность: {data.vocation}
                        </div>
                        <div>
                            Зарплата: {data.salary}  {data.currency}
                        </div>
                        <div>
                            О себе: {data.aboutMyself}
                        </div>
                    </div>
                    <h3>2 Опыт работы</h3>
                    <div className={style.info}>
                    <div>
                        <label>Начало работы:</label>
                        <div>
                            Месяц: {data.monthStart}
                            Год: {data.yearStart}
                        </div>
                    </div>
                {!data.workOn && 
                    <div>
                        <label>Окончание работы:</label>
                        <div>
                            Месяц: {data.monthFinish}
                            Год: {data.yearFinish}
                        </div>
                    </div>
                }
                {data.workOn && 
                    <div>Работаю по настоящее время</div>
                }
                <div>
                    Название компании: {data.companyName}
                </div>
                <div>
                    Должность: {data.position}
                </div>
                <div>
                    Обязанности: {data.responsibilities}
                </div>
                </div>
                <h3>3 Образование</h3>
                <div className={style.info}>
                <div>
                    Уровень образования: {data.education}
                </div>
                <div>
                    Родной язык: {data.nativeLanguage}
                </div>
                <div>
                    Иностранный язык: {data.foreignLanguage}
                </div>
                <div>
                    Уровень владения языком: {data.levelLanguage}
                </div>
                <div>
                    Место обучения: {data.studyPlace}
                </div>
                <div>
                    Факультет: {data.faculty}
                </div>
                <div>
                    Специализация: {data.speciality}
                </div>
                <div>
                    Год окончания: {data.graduationYear}
                </div>
            </div>
            </div>
            </MainContainer>
        )
    }

    export default ReviewPage;