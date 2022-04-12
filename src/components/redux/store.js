import messagesReducer from "./messages-reducer";

let store = {
    _state: {
        names: [
            {
                name: "Dimich",
                id: "1",
            },
            {
                name: "Sasha",
                id: "2",
            },
            {
                name: "Masha",
                id: "3",
            },
            {
                name: "Vika",
                id: "4",
            },
            {
                name: "Sanya",
                id: "5",
            },
        ],
        messages: [
            {
                message: "Hi",
                id: "1",
            },
            {
                message: "Privet",
                id: "2",
            },
            {
                message: "Poka",
                id: "3",
            },
            {
                newPostText: ""
            }
        ],

    },
    getState() {
        return this._state;
    },
    rerenderTree() {
        console.log("HI")
    },
    subscribe(observer) {
        this.rerenderTree = observer
    },
    dispatch(action) {

        this._state.messages = messagesReducer(this._state.messages, action);

        this.rerenderTree(this._state)
    }
}


export default store;
window.store = store;











