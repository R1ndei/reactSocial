import dial from "./Dialogs.module.css"
// import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItems/DialogItem";
import Message from "./Message/Messages";
import React from "react";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {
    let names = props.names.map((names) => <DialogItem name={names.name} key={names.id} id={names.id}/>)
    let messages = props.messages.map((mes) => <Message message={mes.message} key={mes.id}/>)
    let newPostText = props.newPostText;
    let newPostElement = React.createRef();

    let AddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    if(!props.isAuth) return <Redirect to={"/Login"}/>

    return (
        <div className={dial.dialogs}>
            <div className={dial.dialogsItems}>
                {names}
            </div>
            <div className={dial.messages}>
                {messages}
                <textarea ref={newPostElement} onChange={onPostChange} value={newPostText}/>
                <button onClick={AddPost}>Send</button>
            </div>

        </div>
    )

}

export default Dialogs