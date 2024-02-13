import profileReducer, {addPostActionCreator} from "./profile-reducer";


it('length of post its incremented', () => {
    let action = addPostActionCreator("it-camaSSS");
    let state = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 3},
            {id: 2, message: 'It\'s my first post', likesCount: 23},
            {id: 3, message: 'd-medoc its my serv.', likesCount: 32},
            {id: 4, message: 'Soft', likesCount: 11}
        ]
    };

    let newState = profileReducer(state, action);

   expect(newState.posts.length).toBe(5);
});

