const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: '1', name: 'VadokS'},
        {id: '2', name: 'ᗩᑎᗪᖇEY ᒪYON'},
        {id: '3', name: 'SwaT'},
        {id: '4', name: 'Fatality'},
        {id: '5', name: 'BizoN'},
        {id: '6', name: 'Maestro'}
    ],
    messages: [
        {id: 1, message: 'Drnks beer or...?'},
        {id: 2, message: 'No, lets play PCs games'},
        {id: 3, message: 'Yep? drnk and play)'},
        {id: 4, message: 'Yep! drnk and play)'},
        {id: 5, message: 'Yep! drnk and play)'},
        {id: 6, message: 'Yep! drnk and play)'}
    ]
};
export const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {

            // stateCopy.newMessageText = action.newText;

        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };



        default:
            return state;
    }

};

export const sendMessageActionCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;