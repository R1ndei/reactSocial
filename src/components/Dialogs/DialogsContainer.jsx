import {addPostActionCreater} from "../redux/messages-reducer";
import {updateNewPostTextActionCreater} from "../redux/messages-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = (props) => {
//     let AddPost = () => {
//         props.dispatch(addPostActionCreater());
//     }
//
//     let onPostChange = (text) => {
//         let action = updateNewPostTextActionCreater(text)
//         props.dispatch(action)
//     }
//     return <Dialogs updateNewPostText={onPostChange} addPost={AddPost} state={props.state}/>
//
//
// }

let mapStateToProps = (state) => {
    return {
        //НАЗВАНИЯ БЕРЕМ ИЗ redux-store.js
        names: state.messagesReducer.names,
        messages: state.messagesReducer.messages,
        newPostText: state.messagesReducer.newPostText,
        isAuth: state.auth.isAuth,
    }

}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreater(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreater())
        },

    }

}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer