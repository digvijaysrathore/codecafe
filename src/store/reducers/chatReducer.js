const chatState = {
    chats: [
        {id: '1', message: 'Hello, I am a novice in coding.'},
        {id: '2', message: 'Me too, but really wanna build something big.'},
        {id: '3', message: 'Wait a sec, I will send you guys a roadmap.'}
    ]
}

const chatReducer = (state = chatState, action) => {
    switch (action.type) {
        case 'SEND_MESSAGE':
            console.log('sent message', action.message)
            return state;
        case 'MESSAGE_SENDING_ERROR': 
            console.log('message sending error', action.err);
    }
    return state
}

export default chatReducer;