import React from "react";
import style from "./MainInformation.module.css";
import Button from '@material-ui/core/Button';
import { styled } from "../../../node_modules/@material-ui/core/styles";
// import IconButton from '@mui/material/IconButton';
// import PhotoCamera from '@mui/icons-material/PhotoCamera';
// import Stack from '@mui/material/Stack';

const Input = styled('input')({
    display: 'none',
});




    const MainInformation = (props) => {
        return(
            <div className = {style.maininfo}>
                <h2>1. Основная информация.</h2>
                <h3>Загрузите свое фото</h3>
                <label htmlFor="contained-button-file">
                <Input accept="image/*" id="contained-button-file" multiple type="file" />
                <Button variant="contained" component="span">
                Upload
                </Button>
</label>
                {/* <input type="file" name="foto" /> */}
                <input type="submit" value="Отправить" />
                <div>
                    <div>Имя:</div>
                    <input type="text" name="name" />
                </div>
                <div>
                    <div>Фамилия:</div>
                    <input type="text" name="family" />
                </div>
                <div>
                    <div>Отчество:</div>
                    <input type="text" name="lastName" />
                </div>
                <div>
                    <div>Город проживания:</div>
                    <input type="text" name="lastName" />
                </div>
                <div>
                    <div>Дата рождения:</div>
                    <input type="text" name="lastName" />
                </div>
                <div>
                    <div>Пол:</div>
                    <div>
                        <input type="radio" name="lastName" value = "men"/>Муж
                    </div>
                    <div>
                        <input type="radio" name="lastName" value = "women"/>Жен
                    </div>
                </div>
                <div>
                    <div> Гражданство:</div>
                    <input type="text" name="lastName" />
                </div>
                <div>
                    <div> Желаемая должность:</div>
                    <input type="text" name="lastName" />
                </div>
                <div>
                    <div> Желаемая заработная плата:</div>
                    <input type="text" name="lastName" />
                    <select >
                        <option>RUB</option>
                        <option>USD</option>
                    </select>
                </div>
                <div>
                    <div>О себе:</div>
                    <textarea type="text" name="lastName" />
                </div>
                <button>Далее</button>
            </div>
        )
    }

    export default MainInformation;