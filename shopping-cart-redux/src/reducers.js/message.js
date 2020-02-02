import * as Types from "./../constants/ActionType"
import  * as Message from "./../constants/Message"

const initialState = Message.MSG_WELCOME;

const message = (state = initialState, action) => {
	switch (action.type) {
        case Types.CHANGE_MESSAGE:
            return action.message
		default: return state
	}
}

export default message
