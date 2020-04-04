const initState = {
    posts:[
        {id: '1', title: 'Thanks for joining this community', content: 'This is an amazing community'},
        {id: '2', title: 'I launched a new site today.', content: 'This is an amazing community'},
        {id: '3', title: 'Experience from my first web startup', content: 'This is an amazing community'}
    ]
}

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_POST': 
            console.log('created post', action.post)
            return state;
        case 'CREATE_POST_ERROR':
            console.log('create project error', action.err);
    }
    return state
}

export default postReducer;