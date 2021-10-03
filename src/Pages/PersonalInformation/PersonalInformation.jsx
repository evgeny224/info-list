import React from "react";
import style from "./PersonalInformation.module.css";
// import MainInformation from "../../Components/MainInformation/MainInformation";
import CoreInformation from "../../Components/CoreInformation/CoreInformation";

    const PersonalInformation = (props) => {
        return(
            <div className = {style.info}>
                {/* <MainInformation /> */}
                <CoreInformation />
            </div>
        )
    }


    export default PersonalInformation;