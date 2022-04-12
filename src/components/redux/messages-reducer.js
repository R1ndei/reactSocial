export const ADD_POST = "ADD_POST";
export const UPDATE_NEW_TEXT = "UPDATE_NEW_TEXT";

let initialState = {
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
    ],
    newPostText: "",
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
            };
            return {
                ...state,
                newPostText: "",
                messages: [...state.messages, newPost]
            }
        }
        case UPDATE_NEW_TEXT: {
            return {...state, newPostText: action.newText};

        }
        default:
            return state;
    }
}


export const addPostActionCreater = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreater = (text) => {
    return {
        type: UPDATE_NEW_TEXT,
        newText: text,
    }
}

export default messagesReducer;