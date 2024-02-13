import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 3},
                {id: 2, message: 'It\'s my first post', likesCount: 23},
                {id: 3, message: 'd-medoc its my serv.', likesCount: 32},
                {id: 4, message: 'Soft', likesCount: 11}
            ],
                newPostText: 'не отправлено',

        },
        dialogsPage: {
            dialogs: [
                {id: '1', name: 'VadokS'},
                {id: '2', name: 'ᗩᑎᗪᖇEY ᒪYON'},
                {id: '3', name: 'SwaT'},
                {id: '4', name: 'Fatality'},
                {id: '5', name: 'BizoN'},
                {id: '6', name: 'Maestro'}
            ],

            messages: [
                {id: 1, message: 'Drnk beer or...?'},
                {id: 2, message: 'No, lets play PCs games'},
                {id: 3, message: 'Yep? drnk and play)'},
                {id: 4, message: 'Yep! drnk and play)'},
                {id: 5, message: 'Yep! drnk and play)'},
                {id: 6, message: 'Yep! drnk and play)'}
            ],
            newMessageText: 'СООБЩЕНИЕ'
        },
        sideBar: {
            sideNames: [
                {id: '1', name: 'VadokS'},
                {id: '5', name: 'BizoN'},
                {id: '4', name: 'Fatality'}
            ]
        }
    },
    _callSubscriber() {
        console.log('state renew');
    },

    getState() {

        return this._state;
    },
    subscribe(observer)  {
        this._callSubscriber = observer;
    },


    dispatch(action) {

        this._state.profilePage =  profileReducer(this._state.profilePage, action);
        this._state.dialogsPage =  dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar =  navbarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state);
    }

}









window.store = store;
export default store;