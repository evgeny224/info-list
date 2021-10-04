import { connect } from "react-redux";
import { infoReducerAC } from "../../Redux/info-reducer";
import UserInfoInput from "./UserInfoInput";



const mapStateToProps = (state) => {
    return{}
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUserInfo:(userInfo)=> {
            dispatch(infoReducerAC(userInfo))
        },
    }
}


const UserInfoInputContainer = connect(mapStateToProps, mapDispatchToProps)(UserInfoInput);

export default UserInfoInputContainer;