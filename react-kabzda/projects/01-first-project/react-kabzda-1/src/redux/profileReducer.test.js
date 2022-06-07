import profileReducer, {addPostActionCreator} from "./profileReducer";

let state = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 17},
        {id: 2, message: "It's my first post", likesCount: 15},
    ]
}

it('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator('it')

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts.length).toBe(5)
});

it('message of new post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator('it')

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts[4].message).toBe('it')
});
