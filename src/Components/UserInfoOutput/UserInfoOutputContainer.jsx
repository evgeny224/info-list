import { connect } from "react-redux";
import UserInfoOutput from "./UserInfoOutput";



const mapStateToProps = (state) => {
    return{
        userInfo: state.infoPage.userInfo
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return {}
}


const UserInfoOutputContainer = connect(mapStateToProps, mapDispatchToProps)(UserInfoOutput);

export default UserInfoOutputContainer;